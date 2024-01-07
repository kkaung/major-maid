import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Balancer from 'react-wrap-balancer';
import { headingVariants } from './page-header';

interface ExclusionCityServiceProps extends HTMLAttributes<HTMLElement> {
    title: string;
    slug: string;
}

export default function ExclusionCityService({
    ...props
}: ExclusionCityServiceProps) {
    return (
        <section
            id="exclusion"
            aria-labelledby="exclusion"
            className={cn(props.className)}
        >
            <h2 className={cn(headingVariants({}))}>
                <Balancer>Don&apos;t live in a capital city?</Balancer>
            </h2>
            
        </section>
    );
}
