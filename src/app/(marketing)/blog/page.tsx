import React from 'react';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { siteConfig } from '@/configs/site';
import { type Author, allAuthors, allPosts } from 'contentlayer/generated';
import PostCard from './_components/post-card';

import type { Metadata } from 'next';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { BlogTabs } from './_components/blog-tabs';
import { getPathname } from '@/lib/next';

export const runtime = 'edge';

export function generateMetadata(): Metadata {
    const pathname = getPathname();

    return {
        title: 'Cleaning Blog',
        description: `Read major maid's news, tips and tricks other interesting informations and articles about house cleaning.`,
        alternates: {
            canonical: pathname,
        },
    };
}

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Blog', href: '/blog' },
                ]}
                dottable={false}
            />
            <PageHeader className="text-center space-y-4">
                <PageHeaderHeading>
                    {siteConfig.name} House Cleaning Blog
                </PageHeaderHeading>
                <PageHeaderDescription size="sm" className="mx-auto">
                    Our expert cleaners regularly share news, tips and tricks
                    and other interesting information for cleaning.
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
