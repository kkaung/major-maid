import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Shell } from '@/components/shell';
import { Metadata } from 'next';
import React from 'react';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'Rate Us',
    description: '',
};

export default function Page() {
    return (
        <Shell>
            <PageHeader>
                <PageHeaderHeading>Rate Us</PageHeaderHeading>
            </PageHeader>
        </Shell>
    );
}
