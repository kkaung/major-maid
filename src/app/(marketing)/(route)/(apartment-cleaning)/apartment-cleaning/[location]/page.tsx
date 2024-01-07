import React from 'react';
import { type Metadata } from 'next';
import { toTitleCase, unslugify } from '@/lib/utils';
import { getCity } from '@/lib/next';
import Content from '../../_components/content';


export const runtime = 'edge';

export interface PageProps {
    params: {
        location: string;
    };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const city = getCity();

    const location = toTitleCase(unslugify(params.location));

    return {
        title: `Apartment Cleaning Service ${location} | Book Online`,
        description:
            'Book your apartment cleaning service with our trusted and experience cleaners in 60 seconds.',
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
