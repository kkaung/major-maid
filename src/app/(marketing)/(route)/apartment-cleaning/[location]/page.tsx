import { Shell } from '@/components/shell';
import React from 'react';
import Satisfaction from '@/components/marketing/satisfaction';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { type Metadata } from 'next';
import { toTitleCase, unslugify } from '@/lib/utils';

import Hero from '../_components/hero';
import FAQs from '../_components/faqs';
import Content from '../_components/content';
import { getCity } from '@/lib/next';

export const runtime = 'edge';

export interface PageProps {
    params: {
        location: string;
    };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    return {
        title: '',
        description: '',
    };
}

export default function Page({ params }: PageProps) {
    const city = getCity();

    const location = toTitleCase(unslugify(params.location));

    const isCity = city === location;

    return (
        <Content
            city={city}
            suburb={!isCity ? location : undefined}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                { title: 'Apartment Cleaning', href: '/apartment-cleaning' },
                {
                    title: location,
                    href: `/apartment-cleaning/${params.location}`,
                },
            ]}
        />
    );
}
