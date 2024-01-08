import React, { HTMLAttributes } from 'react';

interface PricingProps extends HTMLAttributes<HTMLElement> {}

export default function Pricing({ ...props }: PricingProps) {
    return (
        <section id="pricing" aria-labelledby="pricing-heading">
            Pricing
        </section>
    );
}
