import GridPattern from '@/components/magicui/grid-pattern';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { siteConfig } from '@/config/site';
import React from 'react';
import FAQs from './_components/faqs';

export default function Page() {
    return (
        <Shell>
            <PageHeader className="relative text-center">
                <PageHeaderHeading>
                    {siteConfig.name} House Cleaning Pricing
                </PageHeaderHeading>
                <GridPattern className="-z-10 stroke-gray-200 dark:stroke-gray-800  opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" />
            </PageHeader>
            <section></section>
            <section>
                <h2>Exclusive Regular Cleaning Discounts</h2>
                <p>
                    Need a regular cleaning service? We offer exclusive
                    discounts and a team of highly experienced house cleaners in
                    Sydney.
                </p>
            </section>
            <FAQs />
        </Shell>
    );
}
