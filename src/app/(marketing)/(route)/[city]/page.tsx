import Hero from '@/components/marketing/hero';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { toTitleCase } from '@/lib/utils';
import React from 'react';

export const runtime = 'edge';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '',
    description: '',
};

interface PageProps {
    params: {
        city: string;
    };
}

export default function Page({ params }: PageProps) {
    return (
        <Shell variant="sidebar" className="max-w-6xl w-full gap-16 mx-auto">
            <Hero />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: toTitleCase(params.city), href: '/' },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
