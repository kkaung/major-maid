import GridPattern from '@/components/magicui/grid-pattern';
import Testmonials from '@/components/marketing/testmonials';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { siteConfig } from '@/config/site';
import React from 'react';

export default function Page() {
    return (
        <Shell>
            <PageHeader className="relative text-center">
                <PageHeaderHeading size="lg">
                    {siteConfig.name} Reviews
                </PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    See below what our customers had to say about their{' '}
                    {siteConfig.name} experience.
                </PageHeaderDescription>
                <GridPattern className="-z-10 stroke-gray-200 dark:stroke-gray-800  opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" />
            </PageHeader>
            <Testmonials />
        </Shell>
    );
}
