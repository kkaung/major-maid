import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';
import { headingVariants } from '../page-header';

interface CleanersProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function Cleaners({
    location = 'Sydney',
    ...props
}: CleanersProps) {
    return (
        <section
            id="cleaners"
            aria-labelledby="cleaners-heading"
            className={cn(props.className, 'bg-secondary rounded-3xl p-12')}
        >
            <div className="text-center">
                <h2 className={cn(headingVariants({}))}>
                    Our Experienced and Reliable {location} House Cleaners
                </h2>
            </div>
        </section>
    );
}
