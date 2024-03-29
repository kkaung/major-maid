import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import React from 'react';
import { Shell } from '@/components/shell';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Page() {
    return (
        <Shell>
            <PageHeader className="text-center mx-auto space-y-6">
                <PageHeaderHeading size="lg">Page Not Found</PageHeaderHeading>
                <PageHeaderDescription>
                    An error has occurred while processing your request.
                </PageHeaderDescription>
                <div>
                    <Link
                        href="/"
                        className={cn(
                            buttonVariants({ size: 'lg' }),
                            'rounded-full'
                        )}
                    >
                        Go To Home Page
                    </Link>
                </div>
            </PageHeader>
        </Shell>
    );
}
