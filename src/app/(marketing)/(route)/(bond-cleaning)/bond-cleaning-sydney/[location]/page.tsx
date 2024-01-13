import React from 'react';
import { type Metadata } from 'next';
import { toTitleCase, unslugify } from '@/lib/utils';

import Content from '../../_components/content';
import { getCityFromPathname } from '@/lib/next';

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
        title: `Bond Cleaning ${location} | 100% Bond Back Guarantee`,
        description:
            'Book your bond cleaning service with our trusted cleaners. We guarantee you will get 100% of your bond back.Book online in under 60 seconds.',
    };
}

export default function Page({ params }: PageProps) {
    const city = getCityFromPathname();

    const location = toTitleCase(unslugify(params.location));

    return (
        <Content
            city={city}
            suburb={location}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                { title: 'Bond Cleaning', href: '/bond-cleaning-sydney' },
                {
                    title: location,
                    href: `/bond-cleaning-sydney/${params.location}`,
                },
            ]}
        />
    );
}
