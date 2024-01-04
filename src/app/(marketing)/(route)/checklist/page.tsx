import React from 'react';
import { Shell } from '@/components/shell';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { siteConfig } from '@/config/site';
import Services from '@/components/marketing/services';
import { headers } from 'next/headers';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import Satisfaction from '@/components/marketing/satisfaction';
import TableList, { TableData } from './_components/table-list';

const getCity = () => {
    const headersList = headers();

    return headersList.get('x-vercel-ip-city') ?? 'Sydney';
};

export const runtime = 'edge';

export const data: TableData[] = [
    {
        title: 'All Areas',
        items: [
            {
                area: 'Vacuum carpets',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Sweep & mop floors',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Clean mirrors',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Dust furniture',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Empty rubbish bins',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Quick declutter of floors',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Wipe down electronics',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Wipe down skirting boards',
                isGeneralClean: false,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Dust cornices & remove cobwebs',
                isGeneralClean: false,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Wipe down window frames & ledges',
                isGeneralClean: false,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Wipe down doors, frames & handles',
                isGeneralClean: false,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Wipe down switches & power points',
                isGeneralClean: false,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Clean window interiors & tracks',
                isGeneralClean: false,
                isDeepClean: false,
                isEndLease: true,
            },
            {
                area: 'Clean accessible light fittings',
                isGeneralClean: false,
                isDeepClean: false,
                isEndLease: true,
            },
        ],
    },
    {
        title: 'Kitchen',
        items: [
            {
                area: 'Clean all surfaces',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Wipe down exterior of appliances',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Clean stovetop & oven exterior',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Wipe down outside cabinets',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Clean inside & outside microwave',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Sanitise splashback & benchtops',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Polish sink & taps',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Inside oven (incl. trays & racks)',
                isGeneralClean: false,
                isDeepClean: false,
                isEndLease: true,
            },
            {
                area: 'Clean rangehood & filters',
                isGeneralClean: false,
                isDeepClean: false,
                isEndLease: true,
            },
            {
                area: 'Clean inside cupboards, shelfs & drawer',
                isGeneralClean: false,
                isDeepClean: false,
                isEndLease: true,
            },
        ],
    },
    {
        title: 'Kitchen',
        items: [
            {
                area: 'Clean all surfaces',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Wipe down exterior of appliances',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Clean stovetop & oven exterior',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Wipe down outside cabinets',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Clean inside & outside microwave',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Sanitise splashback & benchtops',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Polish sink & taps',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Inside oven (incl. trays & racks)',
                isGeneralClean: false,
                isDeepClean: false,
                isEndLease: true,
            },
            {
                area: 'Clean rangehood & filters',
                isGeneralClean: false,
                isDeepClean: false,
                isEndLease: true,
            },
            {
                area: 'Clean inside cupboards, shelfs & drawer',
                isGeneralClean: false,
                isDeepClean: false,
                isEndLease: true,
            },
        ],
    },
    {
        title: 'Bathrooms',
        items: [
            {
                area: 'Clean mirrors',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Scrub & sanitise toilet',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Scrub clean bathtub & shower',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Wipe down outside cabinets',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Wipe down benchtops',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Polish sink & taps',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Polish sink & taps',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Clean inside cabinets, shelfs & drawers',
                isGeneralClean: false,
                isDeepClean: false,
                isEndLease: true,
            },
            {
                area: 'Dust accessible exterior fan vents',
                isGeneralClean: false,
                isDeepClean: false,
                isEndLease: true,
            },
        ],
    },
    {
        title: 'Bedrooms',
        items: [
            {
                area: 'Vacuum carpets',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Sweep & mop floors',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Clean mirrors',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Make beds (upon request)',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: false,
            },
            {
                area: 'Quick declutter of floors',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: false,
            },
            {
                area: 'Dust & wipe down furniture',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: false,
            },
            {
                area: 'Dust & wipe down electronics',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: false,
            },
            {
                area: 'Wipe down outside wardrobes',
                isGeneralClean: true,
                isDeepClean: true,
                isEndLease: true,
            },
            {
                area: 'Clean inside wardrobes',
                isGeneralClean: false,
                isDeepClean: false,
                isEndLease: false,
            },
        ],
    },
];

export default function Page() {
    const city = getCity();

    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Checklist', href: '/' },
                ]}
                dottable={false}
            />
            <PageHeader
                id="hero"
                aria-labelledby="hero-heading"
                className="relative text-center"
            >
                <PageHeaderHeading>
                    {siteConfig.name} Cleaning Checklist
                </PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    See below a detailed checklist of our most popular cleaning
                    services.
                </PageHeaderDescription>
            </PageHeader>
            <TableList data={data as any} />
            <Services className="rounded-3xl" location={city} />
            <Satisfaction />
        </Shell>
    );
}
