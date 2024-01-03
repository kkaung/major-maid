import React from 'react';
import Hero from '@/components/marketing/hero';
import FAQs from '@/components/marketing/faqs';
import Featuring from '@/components/marketing/featuring';
import Testmonials from '@/components/marketing/testmonials';
import Services from '@/components/marketing/services';
import Locations from './_components/locations';
import WhyUs from '@/components/marketing/why-us';
import WhyDifferent from '@/components/marketing/why-different';
import HowWork from '@/components/marketing/how-work';
import City from '@/components/marketing/city';
import { Shell } from '@/components/shell';
import Satisfaction from '@/components/marketing/satisfaction';

export const runtime = 'edge';

export default function Page() {
    return (
        <Shell variant="sidebar" className="grid-16">
            <div className="container mx-auto space-y-16">
                <Hero />
                <Testmonials className="max-w-md w-full mx-auto" />
                <Featuring />
                <HowWork />
                <WhyUs />
            </div>
            <Services />
            <Locations className="w-full max-w-7xl mx-auto" />
            <div className="container mx-auto space-y-16">
                <City />
                <FAQs />
                <Satisfaction />
            </div>
        </Shell>
    );
}
