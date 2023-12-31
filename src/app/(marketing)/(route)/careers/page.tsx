import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import FAQs from './_components/faqs';

export default function Page() {
    return (
        <Shell>
            <PageHeader className="text-center">
                <PageHeaderHeading>
                    Join the team and get more house cleaning jobs in
                    <span className="text-blue-500 ml-1">Sydney</span>
                </PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    We’re on a mission to bring happiness and smiles to all the
                    homes across Sydney. Come join our team of happy cleaners
                    and reap the rewards. You’ll get the flexibility of choosing
                    your own work hours, cleaning jobs that are right near you
                    and bonuses for excellent work.
                </PageHeaderDescription>
                <div>
                    <Link
                        href={cn(
                            buttonVariants({
                                variant: 'default',
                            })
                        )}
                    >
                        Apply Now (2 Mins)
                    </Link>
                </div>
            </PageHeader>
            <FAQs />
        </Shell>
    );
}
