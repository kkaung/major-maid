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
            <PageHeader
                id="hero"
                aria-labelledby="hero-heading"
                className="relative text-center space-y-6"
            >
                <PageHeaderHeading size="lg">Our Services</PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    Sometimes, there&apos;s just too much to do. Our maid
                    service will take care of the housework.
                </PageHeaderDescription>
            </PageHeader>
            <section className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <section></section>
                <section></section>
            </section>
        </Shell>
    );
}
