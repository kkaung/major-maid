import { Shell } from '@/components/shell';
import React from 'react';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import Hero from '@/components/marketing/hero';
import { toTitleCase, unslugify } from '@/lib/utils';
import Testmonials from '@/components/marketing/testmonials';
import Services from '@/components/marketing/services';
import FAQs from '@/components/marketing/faqs';
import Featuring from '@/components/marketing/featuring';
import HowWork from '@/components/marketing/how-work';
import type { Metadata } from 'next';
import Satisfaction from '@/components/marketing/satisfaction';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: '',
    description: '',
};

interface PageProps {
    params: {
        city: string;
        suburb: string;
    };
}

export default function Page({ params }: PageProps) {
    const cityName = toTitleCase(unslugify(params.city));

    return (
        <Shell variant="sidebar" className="gap-16">
            <Hero location={toTitleCase(unslugify(params.suburb))} />
            <Testmonials className="max-w-md w-full mx-auto" />
            <Featuring />
            <HowWork />
            <Services />
            <div className="container mx-auto space-y-16">
                <FAQs />
                <Satisfaction />
                <Breadcrumbs
                    segments={[
                        { title: 'Home', href: '/' },
                        { title: cityName, href: `/${params.city}` },
                        {
                            title: toTitleCase(unslugify(params.suburb)),
                            href: '/',
                        },
                    ]}
                    dottable={false}
                />
            </div>
        </Shell>
    );
}
