import React from 'react';
import { getCityFromPathname } from '@/lib/next';
import { type Metadata } from 'next';

import Content from '../_components/content';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPathname();

    return {
        title: `Tile & Grout Cleaning ${city} | Book Online`,
        description:
            'Book your tile and grout cleaning service with our trusted cleaners.Book online in under 60 seconds.',
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
                { title: 'Tile Cleaning', href: '/tile-cleaning-brisbane' },
            ]}
        />
    );
}
