import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { getCity } from '@/lib/next';
import { Metadata } from 'next';
import React from 'react';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function Page() {
    const city = getCity();

    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Services', href: '/services' },
                    { title: 'One Off', href: '/one-off-cleaning' },
                ]}
            />
        </Shell>
    );
}
