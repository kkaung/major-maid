import React from 'react';
import { toTitleCase, unslugify } from '@/lib/utils';
import { type Metadata } from 'next';
import { getCityFromPathname } from '@/lib/next';

import Content from '../../_components/content';

export const runtime = 'edge';

interface PageProps {
    params: {
        location: string;
    };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const location = toTitleCase(unslugify(params.location));

    return {
        title: `End Lease Cleaning ${location} | 100% Bond Back Guarantee`,
        description:
            'Book your end cleaning service with our trusted cleaners. We guarantee you will get 100% of your bond back.Book online in under 60 seconds.',
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
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-brisbane',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: `/end-of-lease-cleaning-brisbane/${params.location}`,
                },
            ]}
        />
    );
}
