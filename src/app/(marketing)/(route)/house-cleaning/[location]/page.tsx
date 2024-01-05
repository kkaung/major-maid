import Satisfaction from '@/components/marketing/satisfaction';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { toTitleCase, unslugify } from '@/lib/utils';
import React from 'react';

interface PageProps {
    params: {
        location: string;
    };
}

export default function Page({ params }: PageProps) {
    const title = toTitleCase(unslugify(params.location));

    return (
        <Shell className="grid">
            <PageHeader>
                <PageHeaderHeading></PageHeaderHeading>
                <PageHeaderDescription></PageHeaderDescription>
            </PageHeader>
            <Satisfaction />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'House Cleaning', href: '/house-cleaning' },
                    { title, href: `/house-cleaning/${params.location}` },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
