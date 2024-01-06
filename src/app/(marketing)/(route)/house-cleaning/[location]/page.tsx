import React from 'react';
import { getCity } from '@/lib/next';
import { toTitleCase, unslugify } from '@/lib/utils';
import Content from '../_components/content';

interface PageProps {
    params: {
        location: string;
    };
}

export default function Page({ params }: PageProps) {
    const city = getCity();

    const location = toTitleCase(unslugify(params.location));

    const isCity = city === location;

    return (
        <Content
            city={''}
            segments={[
                { title: '', href: '' },
                { title: '', href: '' },
            ]}
        />
    );
}
