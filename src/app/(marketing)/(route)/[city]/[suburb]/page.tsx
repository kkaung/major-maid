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

interface PageProps {
    params: {
        city: string;
        suburb: string;
    };
}

export default function Page({ params }: PageProps) {
    return (
        <Shell variant="sidebar" className="max-w-6xl w-full gap-16 mx-auto">
            <Hero location={toTitleCase(unslugify(params.suburb))} />
            <Testmonials />
            <Featuring />
            <HowWork />
            <Services />
            <FAQs />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Sydney', href: '/sydney' },
                    {
                        title: toTitleCase(unslugify(params.suburb)),
                        href: '/',
                    },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
