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
import { Button } from '@/components/ui/button';

export default function Page() {
    return (
        <Shell className="max-w-6xl">
            <PageHeader className="relative text-center">
                <PageHeaderHeading>
                    {siteConfig.name} House Cleaning Pricing
                </PageHeaderHeading>
                <PageHeaderDescription className="mx-auto mt-4" size="sm">
                    We will assist you in determining the most suitable cleaning
                    service from our range of high-quality options, tailored to
                    both your budget and specific cleaning requirements.
                </PageHeaderDescription>
                <div className="flex gap-4 mx-auto mt-6">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="rounded-full"
                    >
                        Flat Rate
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="rounded-full"
                    >
                        Hourly Rate
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="rounded-full"
                    >
                        Extras
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="rounded-full"
                    >
                        End Of Lease
                    </Button>
                </div>
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
