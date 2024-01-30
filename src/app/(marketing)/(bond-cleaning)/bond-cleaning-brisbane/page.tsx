import React from 'react';
import { type Metadata } from 'next';
import { getPathname } from '@/lib/next';

import Content from '../_components/content';
import { getMetadata } from '../_components/metadata';

export async function generateMetadata(): Promise<Metadata> {
    const city = getPathname();

    return getMetadata(city);
}

export default function Page() {
    const city = getPathname();

    return (
        <Content
            city={city}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                { title: 'Bond Cleaning', href: '/bond-cleaning-brisbane' },
            ]}
        />
    );
}
