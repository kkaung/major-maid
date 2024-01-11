'use client';

import { locations } from '@/config/location';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Balancer from 'react-wrap-balancer';
import Link from 'next/link';
import { headingVariants } from './page-header';
import { Collapsible, CollapsibleTrigger } from '@/components/ui/collapsible';

interface SuburbsProps extends HTMLAttributes<HTMLElement> {
    title: string;
    slug: string;
    location?: string;
}

export default function Suburbs({
    title,
    location = 'Sydney',
    slug,
    ...props
}: SuburbsProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    const find = locations.find(l => l.title === location);

    if (!find) return;

    return (
        <section
            id="suburbs"
            aria-label="suburbs"
            className={cn(
                props.className,
                'space-y-12 max-w-5xl w-full mx-auto'
            )}
        >
            <div className="text-center">
                <h2 className={cn(headingVariants({}))}>
                    <Balancer>{title}</Balancer>
                </h2>
            </div>
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <div
                    className={cn(
                        'relative grid grid-cols-2 gap-x-6 gap-y-2 h-[300px] overflow-hidden text-center xs:grid-cols-3 sm:grid-cols-4 sm:text-left md:grid-cols-5 lg:grid-cols-6',
                        {
                            'h-full': isOpen,
                        }
                    )}
                >
                    {find.items.map(item => (
                        <Link
                            key={item.title}
                            href={`/${slug}/${item.slug}`}
                            title={`${title} ${location}`}
                            className="text-sm"
                        >
                            <span className="sr-only">{title}</span>
                            {item.title}
                        </Link>
                    ))}
                    <div
                        className={cn(
                            'absolute z-10 bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background via-background/80 translate-y-1',
                            { 'from-transparent via-transparent': isOpen }
                        )}
                    />
                </div>
                <div className="text-center py-6">
                    <CollapsibleTrigger>
                        {isOpen ? 'View Less' : 'View More'}
                        <span className="sr-only">Toggle</span>
                    </CollapsibleTrigger>
                </div>
            </Collapsible>
        </section>
    );
}
