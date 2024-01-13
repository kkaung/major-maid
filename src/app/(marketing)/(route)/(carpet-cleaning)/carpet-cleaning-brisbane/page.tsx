import React from 'react';
import { getCityFromPathname } from '@/lib/next';
import { type Metadata } from 'next';
import Content from '../_components/content';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPathname();

    return {
        title: `Top Rated Carpet Cleaning ${city} | Carpet Stain Removal`,
        description: `Book your carpet cleaning service with our trusted carpet cleaning technicians. Book and schedule your carpet cleaning job online in less than 60 seconds.`,
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
                { title: 'Carpet Cleaning', href: '/carpet-cleaning-sydney' },
            ]}
        />
    );
}
