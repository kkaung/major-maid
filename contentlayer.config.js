import { makeSource, defineDocumentType } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: 'string',
        resolve: doc => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: 'string',
        resolve: doc => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
    readingTime: {
        type: 'number',
        resolve: doc => {
            const content = doc.body.raw;
            const wordsPerMinute = 200;
            const numberOfWords = content.split(/\s/g).length;
            const minutes = numberOfWords / wordsPerMinute;
            return Math.ceil(minutes);
        },
    },
};

export const Author = defineDocumentType(() => ({
    name: 'Authors',
    filePathPattern: `authors/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
        },
    },
    computedFields,
}));

export const Page = defineDocumentType(() => ({
    name: 'Page',
    filePathPattern: `pages/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
        },
    },
    computedFields,
}));

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `blog/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
        },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: './src/content',
    disableImportAliasWarning: true,
    documentTypes: [Page, Blog, Author],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            () => tree => {
                visit(tree, node => {
                    if (node?.type === 'element' && node?.tagName === 'pre') {
                        const [codeEl] = node.children;
                        if (codeEl.tagName !== 'code') return;

                        node.raw = codeEl.children?.[0].value;
                    }
                });
            },
            [
                rehypePrettyCode,
                {
                    theme: { dark: 'one-dark-pro', light: 'github-light' },

                    /**
                     * @param {{ children: string | any[]; }} node
                     */
                    onVisitLine(node) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: 'text', value: ' ' }];
                        }
                    },
                    /**
                     * @param {{ properties: { className: string[]; }; }} node
                     */
                    onVisitHighlightedLine(node) {
                        node.properties.className.push('line--highlighted');
                    },
                    /**
                     * @param {{ properties: { className: string[]; }; }} node
                     */
                    onVisitHighlightedWord(node) {
                        node.properties.className = ['word--highlighted'];
                    },
                },
            ],
            () => tree => {
                visit(tree, node => {
                    if (node?.type === 'element' && node?.tagName === 'div') {
                        if (
                            !(
                                'data-rehype-pretty-code-fragment' in
                                node.properties
                            )
                        )
                            return;

                        for (const child of node.children) {
                            if (child.tagName === 'pre') {
                                child.properties['raw'] = node.raw;
                            }
                        }
                    }
                });
            },
        ],
    },
});
