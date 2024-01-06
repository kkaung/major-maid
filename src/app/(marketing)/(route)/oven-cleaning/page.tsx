import React from 'react';
import { getCity } from '@/lib/next';
import { Metadata } from 'next';
import Content from './_components/content';

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
                { title: 'Services', href: '/service' },
                { title: 'Oven Cleaning', href: '/oven-cleaning' },
            ]}
        />
    );
}
