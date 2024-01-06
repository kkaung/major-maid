import React from 'react';
import { getCity } from '@/lib/next';
import { type Metadata } from 'next';
import Content from './_components/content';

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
                { title: '', href: '/' },
            ]}
        />
    );
}
