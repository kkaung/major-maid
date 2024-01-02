import React from 'react';
import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { siteConfig } from '@/config/site';
import { allPosts } from 'contentlayer/generated';
import PostCard from './_components/post-card';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '',
    description: '',
};

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
            <PageHeader className="text-center">
                <PageHeaderHeading>
                    {siteConfig.name} House Cleaning Blog
                </PageHeaderHeading>
            </PageHeader>
            <section>
                <ul className="grid gap-6 grid-cols-1 md:grid-cols-3">
                    {allPosts.map((post, idx) => (
                        <li key={idx}>
                            <PostCard post={post} author={null} />
                        </li>
                    ))}
                </ul>
            </section>
        </Shell>
    );
}
