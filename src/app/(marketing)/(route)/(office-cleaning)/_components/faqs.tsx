import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';
import { descriptionVariants, headingVariants } from '@/components/page-header';
import AccordionList from '@/components/accordion-list';

const getFAQs = (location?: string) => {
    return [
        { question: 'How much does your office cleaning cost?', answer: '' },
        { question: 'How long will it toke to clean my office?', answer: '' },
        { question: 'Do you clean retail stores?', answer: '' },
        { question: 'Do you clean medical centers?', answer: '' },
        {
            question: 'How many people will come to clean my house?',
            answer: '',
        },
        {
            question: 'Are your cleaners police checked and insured?',
            answer: 'Yes. Our professional cleaners undergo thorough vetting, police checks, and maintain valid public liability insurance.',
        },
    ];
};

interface FAQsProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function FAQs({ location = 'Sydney', ...props }: FAQsProps) {
    return (
        <section
            id="faqs"
            aria-labelledby="faqs-heading"
            className={cn(props.className, 'bg-secondary rounded-3xl p-6')}
            {...props}
        >
            <div className="mx-auto max-w-4xl w-full space-y-6">
                <div className="mb-12 ">
                    <div className="space-y-4 text-center">
                        <h2 className={cn(headingVariants({}))}>
                            Frequently Asked Questions
                        </h2>
                        <p
                            className={cn(
                                descriptionVariants({ size: 'sm' }),
                                'mx-auto'
                            )}
                        >
                            Have questions about our bond cleaning in {location}
                            ? Take a look below. Or call us on
                            <span className="text-primary ml-1">
                                1300 905 032
                            </span>
                            .
                        </p>
                    </div>
                </div>
                <AccordionList items={getFAQs(location)} />
                <div className="text-center">
                    <Link
                        href="/frequently-asked-questions"
                        className={'underline font-bold group'}
                    >
                        See All
                        <Icons.arrowRight
                            aria-hidden
                            className="ml-1 w-4 h-4 inline transition-all group-hover:translate-x-1"
                            strokeWidth={3}
                        />
                        <span className="sr-only">
                            See All Frequently Asked Questions
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
