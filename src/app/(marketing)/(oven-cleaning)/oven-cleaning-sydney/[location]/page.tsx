import React from 'react';
import { getCityFromPath } from '@/lib/next';
import { Metadata } from 'next';

import Content from '../../_components/content';
import { toTitleCase, unslugify } from '@/lib/utils';
import { getMetadata } from '../../_components/metadata';

interface PageProps {
    params: {
        location: string;
    };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const suburb = toTitleCase(unslugify(params.location));

    return getMetadata(suburb);
}

export default function Page({ params }: PageProps) {
    const city = getCityFromPath();

    const suburb = toTitleCase(unslugify(params.location));

    return (
        <Content
            city={city}
            suburb={suburb}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/service' },
                { title: 'Oven Cleaning', href: '/oven-cleaning-sydney' },
                {
                    title: suburb,
                    href: `/oven-cleaning-sydney/${params.location}`,
                },
            ]}
        />
    );
}
