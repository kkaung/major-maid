import Satisfaction from '@/components/marketing/satisfaction';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { getCity } from '@/lib/next';
import React from 'react';
import Hero from './_components/hero';

export const runtime = 'edge';

interface PageProps {}

export default function Page({}: PageProps) {
    const city = getCity();

    return (
        <Shell>
            <Hero location={city} />
            <Satisfaction />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Services', href: '/services' },
                    { title: 'Regular Cleaning', href: '/regular-cleaning' },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
