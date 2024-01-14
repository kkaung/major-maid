import React from 'react';
import { getCityFromPath } from '@/lib/next';

import Content from '../_components/content';

export default function Page() {
    const city = getCityFromPath();

    return (
        <Content
            city={city}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                {
                    title: 'Construction Cleaning',
                    href: '/construction-cleaing-brisbane',
                },
            ]}
        />
    );
}
