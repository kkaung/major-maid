import React from 'react';
import { type Metadata } from 'next';
import { getCityFromPath } from '@/lib/next';

import Content from '../_components/content';
import { getMetadata } from '../_components/metadata';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPath();

    return getMetadata(city);
}

export default function Page() {
    const city = getCityFromPath();

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
