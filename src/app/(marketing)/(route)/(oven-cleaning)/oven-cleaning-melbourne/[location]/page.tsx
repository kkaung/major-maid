import React from 'react';
import { getCityFromPathname } from '@/lib/next';
import { Metadata } from 'next';
import { toTitleCase, unslugify } from '@/lib/utils';

import Content from '../../_components/content';

export const runtime = 'edge';

interface PageProps {
    params: {
        location: string;
    };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const suburb = toTitleCase(unslugify(params.location));

    return {
        title: `Oven Cleaning ${suburb} | Book Online`,
        description: `Are you are looking for Oven Cleaning of your home in ${suburb}? Book online in 60 seconds.`,
    };
}

export default function Page({ params }: PageProps) {
    const city = getCityFromPathname();

    const suburb = toTitleCase(unslugify(params.location));

    return (
        <Content
            city={city}
            suburb={suburb}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/service' },
                { title: 'Oven Cleaning', href: '/oven-cleaning-melbourne' },
                {
                    title: suburb,
                    href: `/oven-cleaning-melbourne/${params.location}`,
                },
            ]}
        />
    );
}
