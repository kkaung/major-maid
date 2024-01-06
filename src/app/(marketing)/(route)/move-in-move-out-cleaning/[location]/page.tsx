import React from 'react';
import { toTitleCase, unslugify } from '@/lib/utils';
import { type Metadata } from 'next';
import { getCity } from '@/lib/next';

import Content from '../_components/content';

interface PageProps {
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
            suburb={isCity ? location : undefined}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                {
                    title: 'Move In - Move Out Cleaning',
                    href: '/move-in-move-out-cleaning',
                },
                {
                    title: city,
                    href: `/move-in-move-out-cleaning/${city}`,
                },
            ]}
        />
    );
}
