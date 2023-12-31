import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import { buttonVariants } from '../ui/button';

interface WhyDifferentProps extends HTMLAttributes<HTMLElement> {}

export default function WhyDifferent({ ...props }: WhyDifferentProps) {
    return (
        <section
            id="why-different"
            aria-labelledby="why-different-heading"
            className={cn(props.className)}
            {...props}
        >
            <h2>What Makes Us Different</h2>
            <div>
                <Link href="" className={cn(buttonVariants({}))}>
                    Get A Quote & Book Online
                </Link>
            </div>
        </section>
    );
}
