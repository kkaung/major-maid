import { Shell } from '@/components/shell';
import { getCity } from '@/lib/next';
import { Metadata } from 'next';
import React from 'react';
import Hero from './_components/hero';
import Featuring from '@/components/marketing/featuring';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { LocalBusinessJsonLd } from 'next-seo';
import Satisfaction from '@/components/marketing/satisfaction';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function Page() {
    const city = getCity();

    return (
        <>
            <Shell>
                <Hero location={city} />
                <Featuring />
                
                <Satisfaction />
                <Breadcrumbs
                    segments={[
                        { title: 'Home', href: '/' },
                        { title: 'Services', href: '/services' },
                        {
                            title: 'Domestic Cleaing',
                            href: '/domestic-cleaing',
                        },
                    ]}
                    dottable={false}
                />
            </Shell>
            <LocalBusinessJsonLd
                type="Cleaing"
                id={''}
                name={''}
                description={''}
                address={{}}
                rating={{}}
            />
        </>
    );
}
