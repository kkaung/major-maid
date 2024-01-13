import React from 'react';
import { type Metadata } from 'next';
import { getCityFromPathname } from '@/lib/next';

import Content from '../_components/content';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPathname();

    return {
        title: `Deep Cleaning Service In ${city} | Get An Instant Price & Book Online`,
        description: `Book your deep cleaning service with our trusted cleaners in 60 seconds. The ${city}'s best domestic cleaners and home cleaning service.`,
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
                { title: 'Deep Cleaning', href: '/deep-cleaning-canberra' },
            ]}
        />
    );
}
