import React from 'react';
import Hero from '@/components/marketing/hero';
import FAQs from '@/components/marketing/faqs';
import Featuring from '@/components/marketing/featuring';
import Testmonials from '@/components/marketing/testmonials';
import Services from '@/components/marketing/services';
import Locations from './_components/locations';
import WhyUs from '@/components/marketing/why-us';
import HowWork from '@/components/marketing/how-work';
import City from '@/components/marketing/city';
import { Shell } from '@/components/shell';
import Satisfaction from '@/components/marketing/satisfaction';

import { headers } from 'next/headers';
import LatestBlog from './_components/latest-blog';
import Cleaners from '@/components/marketing/cleaners';

const getCity = () => {
    const headersList = headers();

    return headersList.get('x-vercel-ip-city') ?? 'Sydney';
};

export const runtime = 'edge';

export default function Page() {
    const city = getCity();

    return (
        <Shell variant="sidebar" className="grid-16">
            <div className="container mx-auto space-y-16">
                <Hero location={city} />
                <Testmonials className="max-w-md w-full mx-auto" />
                <Featuring />
                <HowWork />
            </div>
            <Services />
            {/* <Locations className="w-full max-w-7xl mx-auto" city={city} /> */}
            <WhyUs className="max-w-5xl w-full mx-auto" />
            <div className="container mx-auto space-y-16">
                <Cleaners />
                <City />
                <FAQs />
                <LatestBlog className="max-w-6xl w-full mx-auto" />
                <Satisfaction />
            </div>
        </Shell>
    );
}
