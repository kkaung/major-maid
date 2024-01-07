import React from 'react';
import { type Metadata } from 'next';
import { getCityFromPathname } from '@/lib/next';
import Content from '../_components/content';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPathname();

    return {
        title: `House Cleaning ${city} | Get An Instant Price & Book Online`,
        description: `Book your house cleaning service with our vetted cleaners in 60 seconds. The ${city}'s best domestic cleaners and home cleaning service.`,
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
                { title: 'House Cleaning', href: '/house-cleaning-sydney' },
            ]}
        />
    );
}
