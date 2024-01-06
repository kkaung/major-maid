import { Shell } from '@/components/shell';
import React from 'react';
import { type Metadata } from 'next';
import { getCity } from '@/lib/next';
import Hero from './_components/hero';
import Satisfaction from '@/components/marketing/satisfaction';
import Featuring from '@/components/marketing/featuring';
import Suburbs from '@/components/suburbs';

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function Page() {
    const city = getCity();

    return (
        <Shell variant="sidebar" className="grid-16">
            <Hero location={city} />
            <Featuring />
            <Suburbs location={city} title={''} />
            <Satisfaction />
        </Shell>
    );
}
