import React from 'react';
import { getCityFromPath } from '@/lib/next';
import { toTitleCase, unslugify } from '@/lib/utils';
import { type Metadata } from 'next';

import Content from '../../_components/content';
import { getMetadata } from '../../_components/metadata';

interface PageProps {
    params: {
        location: string;
    };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const city = toTitleCase(unslugify(params.location));

    return getMetadata(city);
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
                { title: 'Services', href: '/services' },
                { title: 'House Cleaning', href: '/house-cleaning-sydney' },
                {
                    title: suburb,
                    href: `/house-cleaning-sydney/${params.location}`,
                },
            ]}
        />
    );
}
