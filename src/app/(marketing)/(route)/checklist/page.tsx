import React from 'react';
import { Shell } from '@/components/shell';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import GridPattern from '@/components/magicui/grid-pattern';

export default function Page() {
    return (
        <Shell>
            <PageHeader
                id="hero"
                aria-labelledby="hero-heading"
                className="relative text-center"
            >
                <PageHeaderHeading>Our Cleaning Checklist</PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    See below a detailed checklist of our most popular cleaning
                    services.
                </PageHeaderDescription>
                <GridPattern className="-z-10 stroke-gray-200 dark:stroke-gray-800  opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" />
            </PageHeader>
        </Shell>
    );
}
