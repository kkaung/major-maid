import { Shell } from '@/components/shell';
import React from 'react';
import Hero from '@/components/marketing/hero';
import FAQs from '@/components/marketing/faqs';
import Featuring from '@/components/marketing/featuring';
import Testmonials from '@/components/marketing/testmonials';
import LatestBlog from '../_components/latest-blog';
import Locations from '../_components/locations';
import HowWork from '@/components/marketing/how-work';
import Services from '@/components/marketing/services';
import WhyUs from '@/components/marketing/why-us';

export default function Page() {
    return (
        <Shell className="max-w-6xl gap-16">
            <Hero />
            <Testmonials className="max-w-lg w-full mx-auto" />
            <Featuring />
            <HowWork />
            <WhyUs />
            <Services />
            <Locations className="mx-auto max-w-3xl" />
            <FAQs className="mx-auto" />
            <LatestBlog className="mx-auto max-w-xl" />
        </Shell>
    );
}
