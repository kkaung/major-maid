import React from 'react';
import { getCityFromPathname } from '@/lib/next';
import { type Metadata } from 'next';

import Content from '../_components/content';

export async function generateMetadata({}): Promise<Metadata> {
    const city = getCityFromPathname();

    return {
        title: `Bond Cleaning ${city} | 100% Bond Back Guarantee`,
        description:
            'Book your bond cleaning service with our trusted cleaners. We guarantee you will get 100% of your bond back.Book online in under 60 seconds.',
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
                { title: 'Bond Cleaning', href: '/bond-cleaning-melbourne' },
            ]}
        />
    );
}
