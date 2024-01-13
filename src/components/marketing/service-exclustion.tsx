import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';

interface ServiceExclustionProps extends HTMLAttributes<HTMLElement> {}

export default function ServiceExclusion({ ...props }: ServiceExclustionProps) {
    return (
        <section
            id="other-services"
            aria-labelledby="other-services-heading"
            className={cn(props.className)}
            {...props}
        >
            <h2>Other Services We Offer</h2>
        </section>
    );
}
