import Link from 'next/link';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import { descriptionVariants, headingVariants } from '@/components/page-header';
import { buttonVariants } from '@/components/ui/button';

interface SatisfactionProps extends HTMLAttributes<HTMLElement> {}

export default function Satisfaction({ ...props }: SatisfactionProps) {
    return (
        <section
            id="satisfaction"
            aria-labelledby="satisfaction-heading"
            className={cn(
                props.className,
                'py-12 bg-primary text-white rounded-3xl'
            )}
        >
            <div className="max-w-3xl w-full mx-auto space-y-6 text-center px-6">
                <h2 className={cn(headingVariants({}))}>
                    We’re Committed To 200% <br /> Customer Satisfaction Each
                    And Every Time
                </h2>
                <p
                    className={cn(
                        descriptionVariants({ size: 'sm' }),
                        'text-white'
                    )}
                >
                    If you’re not happy with our work, we make it right!
                </p>
                <Link
                    href="/booking"
                    className={cn(
                        buttonVariants({ variant: 'secondary' }),
                        'text-primary rounded-full font-semibold w-40 hover:text-primary'
                    )}
                >
                    Get a quote
                </Link>
            </div>
        </section>
    );
}
