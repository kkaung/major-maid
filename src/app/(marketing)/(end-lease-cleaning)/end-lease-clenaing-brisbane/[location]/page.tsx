import React from 'react';
import { toTitleCase, unslugify } from '@/lib/utils';
import { type Metadata } from 'next';
import { getCityFromPath } from '@/lib/next';

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
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-brisbane',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: `/end-of-lease-cleaning-brisbane/${params.location}`,
                },
            ]}
        />
    );
}
