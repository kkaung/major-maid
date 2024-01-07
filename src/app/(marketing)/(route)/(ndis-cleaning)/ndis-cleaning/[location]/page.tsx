import { Shell } from '@/components/shell';
import React from 'react';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import Satisfaction from '@/components/marketing/satisfaction';
import { toTitleCase, unslugify } from '@/lib/utils';
import Hero from '../../_components/hero';
import FAQs from '../../_components/faqs';

interface PageProps {
    params: {
        location: string;
    };
}

export default function Page({ params }: PageProps) {
    const location = toTitleCase(unslugify(params.location));

    return (
        <Shell>
            <Hero location={location} />
            <FAQs />
            <Satisfaction />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Services', href: '/services' },
                    {
                        title: 'NDIS Cleaning',
                        href: '/ndis-cleaning',
                    },
                    {
                        title: location,
                        href: `/ndis-cleaning/${params.location}`,
                    },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
