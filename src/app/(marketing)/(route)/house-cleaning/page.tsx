import Hero from '@/components/marketing/hero';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { headers } from 'next/headers';
import React from 'react';

export const runtime = 'edge';

const getCity = () => {
    const headersList = headers();

    return headersList.get('x-vercel-ip-city') ?? 'Sydney';
};

export default function Page() {
    const city = getCity();

    return (
        <Shell className="grid-16">
            <Hero />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'House Cleaning', href: '/house-cleaning' },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
