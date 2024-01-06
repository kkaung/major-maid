import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

interface RecommendationProps extends HTMLAttributes<HTMLElement> {}

export default function Recommendation({ ...props }: RecommendationProps) {
    return (
        <section
            id="recommendation"
            aria-labelledby="recommendation-heading"
            className={cn(props.className)}
            {...props}
        >
            <h2>
                
            </h2>
            Recommendation
        </section>
    );
}
