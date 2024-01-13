import React from 'react';
import { type Metadata } from 'next';
import { getCityFromPathname } from '@/lib/next';

import Content from '../_components/content';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPathname();

    return {
        title: ``,
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
                {
                    title: 'Matress Cleaning',
                    href: '/matress-cleaning-brisbane',
                },
            ]}
        />
    );
}
