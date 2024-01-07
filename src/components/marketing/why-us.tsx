import React, { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { headingVariants } from '@/components/page-header';
import Balancer from 'react-wrap-balancer';
import { siteConfig } from '@/config/site';
import { Separator } from '@/components/ui/separator';

interface WhyUsProps extends HTMLAttributes<HTMLElement> {
    location?: string;
    service?: string;
}

export default function WhyUs({
    location = 'Sydney',
    service = 'Cleaing Service',
    ...props
}: WhyUsProps) {
    return (
        <section
            id="why-us"
            aria-labelledby="why-us-heading"
            className={cn(props.className, 'space-y-12')}
        >
            <div className="text-center">
                <h2 className={cn(headingVariants({}))}>
                    <Balancer>
                        Why Choose{' '}
                        <span className="text-primary">{siteConfig.name}</span>?
                    </Balancer>
                </h2>
            </div>

            <div>
                <div>
                    <div>
                        <div className="py-4">
                            <div className="text-4xl font-semibold italic">
                                {siteConfig.name}
                            </div>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                        <Separator />
                    </div>
                    <div>
                        <div>Standard Cleaning Companines</div>
                    </div>
                </div>
                <div>
                    <Link
                        href="/booking"
                        className={cn(
                            buttonVariants({
                                size: 'lg',
                            }),
                            'font-semibold rounded-full'
                        )}
                    >
                        Book online now
                    </Link>
                </div>
            </div>
        </section>
    );
}
