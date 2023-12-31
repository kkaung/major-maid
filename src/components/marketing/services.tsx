import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

interface ServicesProps extends HTMLAttributes<HTMLElement> {}

export default function Services({ ...props }: ServicesProps) {
    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className={cn(props.className, 'text-center')}
        >
            <h2 className="text-xl font-semibold">
                Cleaning Services We Offer
            </h2>
            <p className="text-muted-foreground mt-2">
                Whatever your cleaning needs are, we&apos;ve got you covered.
            </p>
            <ul className="grid grid-cols-3"></ul>
        </section>
    );
}
