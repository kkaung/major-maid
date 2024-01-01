import { Shell } from '@/components/shell';
import React from 'react';
import Hero from '@/components/marketing/hero';
import FAQs from '@/components/marketing/faqs';
import Featuring from '@/components/marketing/featuring';
import Testmonials from '@/components/marketing/testmonials';
import Services from '@/components/marketing/services';
import LatestBlog from './_components/latest-blog';
import Locations from './_components/locations';
import WhyUs from '@/components/marketing/why-us';
import WhyDifferent from '@/components/marketing/why-different';
import Discounts from '@/components/marketing/discounts';
import HowWork from '@/components/marketing/how-work';

export const runtime = 'edge';

export default function Page() {
    return (
        <Shell className="max-w-6xl gap-16">
            <Hero />
            <Testmonials className="max-w-md w-full mx-auto" />
            <Featuring />
            {/* <WhyDifferent /> */}
            {/* <WhyUs /> */}
            <Discounts />
            <HowWork />
            <Services />
            <Locations className="mx-auto max-w-4xl" />
            <FAQs />
            <LatestBlog />
        </Shell>
    );
}
