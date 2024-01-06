import { headingVariants } from '@/components/page-header';
import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';
import Balancer from 'react-wrap-balancer';

interface InclusionProps extends HTMLAttributes<HTMLElement> {}

export default function Inclusion({ ...props }: InclusionProps) {
    return (
        <section
            id="inclusion"
            aria-labelledby="inclusion"
            className={cn(props.className, 'space-y-6')}
        >
            <div className="text-center">
                <h2 className={cn(headingVariants({}))}>
                    <Balancer>Apartment Clean Inclusions</Balancer>
                </h2>
            </div>
        </section>
    );
}
