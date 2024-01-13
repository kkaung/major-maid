import React from 'react';
import { type Metadata } from 'next';
import { toTitleCase, unslugify } from '@/lib/utils';
import { getCityFromPathname } from '@/lib/next';

import Content from '../../_components/content';

export interface PageProps {
    params: {
        location: string;
    };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const suburb = toTitleCase(unslugify(params.location));

    return {
        title: `Apartment Cleaning Service ${suburb} | Book Online`,
        description:
            'Book your apartment cleaning service with our trusted and experienced cleaners online in 60 seconds.',
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
                { title: 'Services', href: '/services' },
                { title: 'Apartment Cleaning', href: '/apartment-cleaning' },
                {
                    title: suburb,
                    href: `/apartment-cleaning-canberra/${params.location}`,
                },
            ]}
        />
    );
}
