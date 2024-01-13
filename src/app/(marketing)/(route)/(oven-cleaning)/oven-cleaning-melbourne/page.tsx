import React from 'react';
import { getCityFromPathname } from '@/lib/next';
import { Metadata } from 'next';

import Content from '../_components/content';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPathname();

    return {
        title: `Oven Cleaning ${city} | Book Online`,
        description: `Are you are looking for Oven Cleaning of your home in ${city}? Book online in 60 seconds.`,
    };
}

export default function Page() {
    const city = getCityFromPathname();

    return (
        <Content
            city={city}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/service' },
                { title: 'Oven Cleaning', href: '/oven-cleaning-melbourne' },
            ]}
        />
    );
}
