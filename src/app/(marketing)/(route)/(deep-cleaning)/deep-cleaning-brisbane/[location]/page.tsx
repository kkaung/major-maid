import React from 'react';
import { type Metadata } from 'next';
import { getCityFromPath } from '@/lib/next';
import { toTitleCase, unslugify } from '@/lib/utils';

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
                { title: 'Services', href: '/services' },
                { title: 'Deep Cleaning', href: '/deep-cleaning-melbourne' },
                {
                    title: suburb,
                    href: `/deep-cleaning-brisbane/${params.location}`,
                },
            ]}
        />
    );
}
