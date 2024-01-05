import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { headers } from 'next/headers';
import React from 'react';
import Hero from './_components/hero';

export const runtime = 'edge';

const getCity = () => {
    const headersList = headers();

    return headersList.get('x-vercel-ip-city') ?? 'Sydney';
};

export default function Page() {
    const city = getCity();

    return (
        <Shell>
            <Hero />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Office Cleaning', href: '/office-cleaning' },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
