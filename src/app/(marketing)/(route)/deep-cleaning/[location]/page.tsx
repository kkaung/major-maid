import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import React from 'react';
import Hero from '../_components/hero';
import { toTitleCase, unslugify } from '@/lib/utils';
import Satisfaction from '@/components/marketing/satisfaction';

interface PageProps {
    params: {
        location: string;
    };
}

export default function Page({ params }: PageProps) {
    const title = toTitleCase(unslugify(params.location));

    return (
        <Shell>
            <Hero location={title} />
            <Satisfaction />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Services', href: '/services' },
                    { title: 'Deep Cleaning', href: '/deep-cleaning' },
                    { title, href: `/deep-cleaning/${params.location}` },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
