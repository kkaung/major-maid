import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import React from 'react';

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs segments={[{ title: 'Home', href: '' }]} />
            
        </Shell>
    );
}
