import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from './ui/accordion';

interface AccordionListProps extends HTMLAttributes<HTMLElement> {
    items: { question: string; answer: string }[];
}

export default function AccordionList({ items, ...props }: AccordionListProps) {
    return (
        <Accordion type="single" collapsible className={cn(props.className)}>
            {items.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx + 1}`}>
                    <AccordionTrigger className="sm:text-lg">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
