import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import React from 'react';
import Hero from './_components/hero';
import Satisfaction from '@/components/marketing/satisfaction';
import { headers } from 'next/headers';
import Featuring from '@/components/marketing/featuring';
import Testmonials from '@/components/marketing/testmonials';
import FAQs from './_components/faqs';
import HowWork from './_components/how-work';
import { type Metadata } from 'next';
import { getCity } from '@/lib/next';
import { LocalBusinessJsonLd } from 'next-seo';
import { siteConfig } from '@/config/site';
import { absoluteUrl } from '@/lib/utils';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function Page() {
    const city = getCity();

    return (
        <>
            <LocalBusinessJsonLd
                useAppDir
                id={''}
                type="Cleaing"
                name="End Of Lease Cleaing"
                url={absoluteUrl('/')}
                description={''}
                address={{
                    addressLocality: city,
                    addressCountry: 'Australia',
                }}
                telephone={siteConfig.business.phone}
                rating={{
                    ratingValue: siteConfig.rating.ratingValue,
                    ratingCount: siteConfig.rating.ratingCount,
                }}
            />
            <Shell>
                <Hero location={city} />
                <Featuring />
                <HowWork location={city} />
                <Testmonials className="mx-auto" />
                <FAQs />
                <Satisfaction />
                <Breadcrumbs
                    segments={[
                        { title: 'Home', href: '/' },
                        {
                            title: 'End Of Lease Cleaning',
                            href: '/end-lease-cleaning',
                        },
                    ]}
                    dottable={false}
                />
            </Shell>
        </>
    );
}
