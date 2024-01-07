import { type Metadata } from 'next';
import React from 'react';
import {} from 'next-seo';
import Content from '../_components/content';
import { getCity } from '@/lib/next';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCity();

    return {
        title: `Apartment Cleaning Service ${city} | Book Online`,
        description:
            'Book your apartment cleaning service with our trusted and experience cleaners in 60 seconds.',
    };
}

export default function Page() {
    const city = getCity();

    return (
        <Content
            city={city}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                { title: 'Apartment Cleaning', href: '/apartment-cleaning' },
            ]}
        />
    );
}
