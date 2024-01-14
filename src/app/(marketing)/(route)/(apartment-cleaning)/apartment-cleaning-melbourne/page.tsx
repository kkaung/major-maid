import { type Metadata } from 'next';
import React from 'react';
import Content from '../_components/content';
import { getCityFromPath } from '@/lib/next';
import { getMetadata } from '../_components/metadata';

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
                {
                    title: 'Apartment Cleaning',
                    href: '/apartment-cleaning-melbourne',
                },
            ]}
        />
    );
}
