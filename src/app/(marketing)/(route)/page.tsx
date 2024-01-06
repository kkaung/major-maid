import React from 'react';
import Hero from '@/components/marketing/hero';
import FAQs from '@/components/marketing/faqs';
import Featuring from '@/components/marketing/featuring';
import Testmonials from '@/components/marketing/testmonials';
import Services from '@/components/marketing/services';
import WhyUs from '@/components/marketing/why-us';
import HowWork from '@/components/marketing/how-work';
import City from '@/components/marketing/city';
import { Shell } from '@/components/shell';
import Satisfaction from '@/components/marketing/satisfaction';
import LatestBlog from './_components/latest-blog';
import { getCity } from '@/lib/next';
import { OrganizationJsonLd, WebPageJsonLd } from 'next-seo';

export const runtime = 'edge';

export default function Page() {
    const city = getCity();

    return (
        <>
            <Shell variant="sidebar" className="grid-16">
                <Hero location={city} />
                <Featuring />
                <HowWork />
                <div className="container mx-auto space-y-16">
                    <WhyUs
                        location={city}
                        className="max-w-5xl w-full mx-auto"
                    />
                    <City />
                    <FAQs />
                    {/* <LatestBlog className="max-w-6xl w-full mx-auto" /> */}
                </div>
                <div className="bg-secondary py-12"></div>
                <div className="container mx-auto">
                    <Satisfaction className="container mx-auto" />
                </div>
            </Shell>
        </>
    );
}
