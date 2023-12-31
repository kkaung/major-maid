import { type MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/utils';
import { allBlogs, allPages } from 'contentlayer/generated';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pagesRoutes = allPages.map(page => ({
        url: absoluteUrl(`${page.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const postsRoutes = allBlogs.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const routes = ['', '/products', '/stores', '/build-a-board', '/blog'].map(
        route => ({
            url: absoluteUrl(route),
            lastModified: new Date().toISOString(),
        })
    );

    return [...routes, ...postsRoutes, ...pagesRoutes];
}
