import GridPattern from '@/components/magicui/grid-pattern';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { type Metadata } from 'next';
import React from 'react';

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
                <GridPattern className="-z-10 stroke-gray-200 dark:stroke-gray-800  opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" />
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
