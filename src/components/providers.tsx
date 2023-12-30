'use client';

import * as React from 'react';

import { Provider as JotaiProvider } from 'jotai';

import { TooltipProvider } from '@/components/ui/tooltip';
import dynamic from 'next/dynamic';

const DynamicProgressBar = dynamic(() => import('@/components/progress-bar'), {
    ssr: false,
});

export function Providers({ children, ...props }: React.PropsWithChildren) {
    return (
        <>
            <DynamicProgressBar />
            <JotaiProvider>
                <TooltipProvider>{children}</TooltipProvider>
            </JotaiProvider>
        </>
    );
}
