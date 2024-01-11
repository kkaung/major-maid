import React from 'react';
import Hero from '@/components/marketing/hero';
import FAQs from '@/components/marketing/faqs';
import Featuring from '@/components/marketing/featuring';
import WhyUs from '@/components/marketing/why-us';
import HowWork from '@/components/marketing/how-work';
import City from '@/components/marketing/city';
import { Shell } from '@/components/shell';
import Satisfaction from '@/components/marketing/satisfaction';
import { getCity } from '@/lib/next';
import Reviews from '@/components/marketing/reviews';
import Services from '@/components/marketing/services';
import LatestBlog from './_components/latest-blog';

export const runtime = 'edge';

export default function Page() {
    const city = getCity();

    return (
        <>
            <Shell variant="sidebar" className="grid-16">
                <div className="container mx-auto">
                    <Hero location={city} />
                    <Featuring />
                </div>
                <HowWork className="container mx-auto" />
                <Reviews />
                <Services location={city} />
                <div className="container mx-auto space-y-16 max-w-6xl">
                    <WhyUs
                        location={city}
                        className="max-w-5xl w-full mx-auto"
                    />
                    <City />
                    <FAQs />
                    <Satisfaction className="container mx-auto" />
                </div>
                <div className="container mx-auto max-w-6xl space-y-16"></div>
            </Shell>
        </>
    );
}
