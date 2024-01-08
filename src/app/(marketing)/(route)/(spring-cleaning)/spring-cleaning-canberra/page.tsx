import React from 'react';
import { type Metadata } from 'next';
import { getCityFromPathname } from '@/lib/next';

import Content from '../_components/content';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPathname();

    return {
        title: `Spring Cleaning Service ${city} | 100% Bond Back Guarantee`,
        description:
            'Book your spring cleaning service with our trusted cleaners. Book online in 60 seconds.',
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
                { title: 'Spring Cleaning', href: '/spring-cleaning-sydney' },
            ]}
        />
    );
}