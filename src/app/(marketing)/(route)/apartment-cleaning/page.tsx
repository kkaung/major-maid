import { type Metadata } from 'next';
import React from 'react';
import {} from 'next-seo';
import Content from './_components/content';
import { getCity } from '@/lib/next';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function Page() {
    const city = getCity();

    return (
        <Content
            city={city}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                { title: 'Apartment Cleaning', href: '/apartment-cleaning' },
            ]}
        />
    );
}
