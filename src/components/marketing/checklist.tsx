import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';
import { headingVariants } from '../page-header';
import Balancer from 'react-wrap-balancer';

const checklists = [
    {
        name: '',
        items: [{ name: '', included: true }],
    },
];

interface ChecklistProps extends HTMLAttributes<HTMLElement> {
    title: string;
    name: string;
}

export default function Checklist({ title, name, ...props }: ChecklistProps) {
    return (
        <section
            id="checklist"
            aria-labelledby="checklist-heading"
            className={cn(props.className)}
        >
            <div className="text-center">
                <h2 className={cn(headingVariants({}))}>
                    <Balancer>{title} Checklist</Balancer>
                </h2>
            </div>
        </section>
    );
}
