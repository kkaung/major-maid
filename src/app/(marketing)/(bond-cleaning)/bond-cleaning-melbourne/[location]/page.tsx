import React from 'react';
import { type Metadata } from 'next';
import { toTitleCase, unslugify } from '@/lib/utils';
import Content from '../../_components/content';
import { getCityFromPath } from '@/lib/next';
import { getMetadata } from '../../_components/metadata';

interface PageProps {
    params: {
        location: string;
    };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const location = toTitleCase(unslugify(params.location));

    return getMetadata(location);
}

export default function Page({ params }: PageProps) {
    const city = getCityFromPath();

    const location = toTitleCase(unslugify(params.location));

    return (
        <Content
            city={city}
            suburb={location}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                { title: 'Bond Cleaning', href: '/bond-cleaning-melbourne' },
                {
                    title: location,
                    href: `/bond-cleaning-melbourne/${params.location}`,
                },
            ]}
        />
    );
}
