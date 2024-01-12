import { type Metadata } from 'next';
import React from 'react';
import Content from '../_components/content';
import { getCityFromPathname } from '@/lib/next';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPathname();

    return {
        title: `Apartment Cleaning Service ${city} | Book Online`,
        description:
            'Book your apartment cleaning service with our trusted and experience cleaners in 60 seconds.',
    };
}

export default function Page() {
    const city = getCityFromPathname();

    return (
        <Content
            city={city}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                {
                    title: 'Apartment Cleaning',
                    href: '/apartment-cleaning-sydney',
                },
            ]}
        />
    );
}
