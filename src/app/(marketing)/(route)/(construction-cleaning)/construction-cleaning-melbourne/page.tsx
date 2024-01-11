import React from 'react';
import { getCityFromPathname } from '@/lib/next';
import { type Metadata } from 'next';

import Content from '../_components/content';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPathname();

    return {
        title: `After Builder Cleaning Service ${city}`,
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
                    title: 'Construction Cleaning',
                    href: '/construction-cleaing-sydney',
                },
            ]}
        />
    );
}
