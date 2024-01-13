import React from 'react';
import { getCityFromPathname } from '@/lib/next';
import { Metadata } from 'next';

import Content from '../_components/content';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPathname();

    return {
        title: `Office Cleaning Service ${city} | Book Online`,
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
                    title: 'Office Cleaning',
                    href: '/office-cleaning-melbourne',
                },
            ]}
        />
    );
}
