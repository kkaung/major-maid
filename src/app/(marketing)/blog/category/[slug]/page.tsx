import React from 'react';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { toTitleCase, unslugify } from '@/lib/utils';
import { Author, allAuthors, allPosts } from 'contentlayer/generated';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { Metadata } from 'next';
import { getPathname } from '@/lib/next';

import { BlogTabs } from '../../_components/blog-tabs';
import PostCard from '../../_components/post-card';

interface PageProps {
    params: {
        slug: string;
    };
}

export const runtime = 'edge';

export function generateMetadata(): Metadata {
    const pathname = getPathname();

    return {
        title: ``,
        description: ``,
        alternates: {
            canonical: pathname,
        },
    };
}

export default function Page({ params }: PageProps) {
    const title = toTitleCase(unslugify(params.slug));

    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Blog', href: '/blog' },
                    {
                        title,
                        href: `/blog/category/${params.slug}`,
                    },
                ]}
                dottable={false}
            />
            <PageHeader className="text-center space-y-4">
                <PageHeaderHeading>Cleaning {title}</PageHeaderHeading>
                <PageHeaderDescription size="sm" className="mx-auto">
                    Simple solutions for a clean home.
                </PageHeaderDescription>
            </PageHeader>
            <section className="mt-8 max-w-5xl w-full mx-auto">
                <BlogTabs />
                <ul className="grid gap-6 grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3">
                    {allPosts.map((post, idx) => {
                        const author = allAuthors.find(
                            author => author.slugAsParams === post.author
                        ) as Author;

                        return (
                            <li key={idx}>
                                <PostCard post={post} author={author} />
                            </li>
                        );
                    })}
                </ul>
                <Pagination className="mt-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </section>
        </Shell>
    );
}
