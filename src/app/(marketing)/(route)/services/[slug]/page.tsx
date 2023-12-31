import GridPattern from '@/components/magicui/grid-pattern';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import React from 'react';

interface PageProps {
    params: {
        slug: string;
    };
}

export default function Page({ params, ...props }: PageProps) {
    return (
        <Shell>
            <PageHeader className="relative">
                <PageHeaderHeading>
                    Professional Cleaning Services In Sydney
                </PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    See below a detailed checklist of our most popular cleaning
                    services.
                </PageHeaderDescription>
                <GridPattern className="-z-10 stroke-gray-200 dark:stroke-gray-800  opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" />
            </PageHeader>
        </Shell>
    );
}
