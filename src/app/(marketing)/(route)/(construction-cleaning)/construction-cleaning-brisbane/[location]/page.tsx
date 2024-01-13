import React from 'react';
import { getCityFromPathname } from '@/lib/next';
import { type Metadata } from 'next';
import { toTitleCase, unslugify } from '@/lib/utils';

import Content from '../../_components/content';

export interface PageProps {
    params: {
        location: string;
    };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const suburb = toTitleCase(unslugify(params.location));

    return {
        title: `After Builder Cleaning Service`,
        description: ``,
    };
}

export default function Page({ params }: PageProps) {
    const city = getCityFromPathname();

    const suburb = toTitleCase(unslugify(params.location));

    return (
        <Content
            city={city}
            suburb={suburb}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                {
                    title: 'Construction Cleaning',
                    href: '/construction-cleaing-brisbane',
                },
                {
                    title: 'Construction Cleaning',
                    href: `/construction-cleaing-brisbane/${params.location}`,
                },
            ]}
        />
    );
}
