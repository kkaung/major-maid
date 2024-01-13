import { Metadata } from 'next';
import React from 'react';
import { getCityFromPathname } from '@/lib/next';

import Content from '../_components/content';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPathname();

    return {
        title: `NDIS Cleaning Service ${city}`,
        description: ``,
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
                { title: 'NDIS Cleaning', href: '/ndis-cleaning-sydney' },
            ]}
        />
    );
}
