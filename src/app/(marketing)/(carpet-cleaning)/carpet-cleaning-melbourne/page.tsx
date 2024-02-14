import React from 'react';
import { getCityFromPath } from '@/lib/next';
import { type Metadata } from 'next';
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
                { title: 'Cleaning Services', href: '/cleaning-services' },
                { title: 'House Cleaning', href: '/house-cleaner-melbourne' },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-melbourne',
                },
            ]}
        />
    );
}
