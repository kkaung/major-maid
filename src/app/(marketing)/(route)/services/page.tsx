import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import React from 'react';
import { type Metadata } from 'next';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: '...',
    description: '...',
};

export default function Page() {
    return (
        <Shell>
            <PageHeader
                id="hero"
                aria-labelledby="hero-heading"
                className="relative text-center"
            >
                <PageHeaderHeading>Our Services</PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    Sometimes, there&apos;s just too much to do. Our maid
                    service will take care of the housework.
                </PageHeaderDescription>
            </PageHeader>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    {
                        title: 'Services',
                        href: '/services',
                    },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
