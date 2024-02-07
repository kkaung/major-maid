import React from 'react';
import Hero from '@/components/marketing/hero';
import FAQs from '@/components/marketing/faqs';
import Featuring from '@/components/marketing/featuring';
import WhyUs from '@/components/marketing/why-us';
import HowWork from '@/components/marketing/how-work';
import { Shell } from '@/components/shell';
import Satisfaction from '@/components/marketing/satisfaction';
import { getCity, getCityFromPath } from '@/lib/next';
import Reviews from '@/components/marketing/reviews';
import Services from '@/components/marketing/services';
import { WebPageJsonLd, OrganizationJsonLd, BreadcrumbJsonLd } from 'next-seo';
import { siteConfig } from '@/configs/site';
import LatestBlog from './_components/latest-blog';
import ServiceInclusion from '@/components/marketing/service-inclusion';
import { type Metadata } from 'next';
import { absoluteUrl } from '@/lib/utils';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPath();

    return {
        title: `Professional House Cleaning Sydney - Maid Services`,
        description:
            'Major Maid offers professional cleaning services in Sdyeny. Book house cleaning online in 60 seconds. Highly rated, trusted and experienced cleaners.',
    };
}

export default function Page() {
    const city = getCity();

    return (
        <>
            <Shell variant="sidebar" className="grid-16">
                <div className="container mx-auto space-y-12">
                    <Hero location={city} />
                    <Featuring />
                </div>
                <HowWork className="container mx-auto" />
                <Reviews />
                <div>
                    <Services location={city} />
                    <WhyUs location={city} className="bg-primary" />
                </div>
                <div className="container mx-auto space-y-16 max-w-6xl">
                    <ServiceInclusion />
                    <FAQs />
                    <Satisfaction className="container mx-auto" />
                </div>
                <div className="container mx-auto max-w-6xl space-y-16"></div>
            </Shell>
            <WebPageJsonLd
                useAppDir
                id={siteConfig.url}
                url={siteConfig.url}
                description=""
            />
            <OrganizationJsonLd
                useAppDir
                name={siteConfig.name}
                url={siteConfig.url}
                logo=""
                legalName=""
            />
            <BreadcrumbJsonLd
                useAppDir
                itemListElements={[
                    { position: 1, name: 'Home', item: absoluteUrl('/') },
                ]}
            />
        </>
    );
}
