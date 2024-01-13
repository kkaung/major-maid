import React from 'react';
import Content from '../_components/content';
import { getCityFromPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPathname();

    return {
        title: `${city}`,
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
                { title: 'Drive Way Cleaning', href: '/driveway' },
            ]}
        />
    );
}
