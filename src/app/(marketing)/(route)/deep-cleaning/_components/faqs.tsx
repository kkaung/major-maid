import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';
import { descriptionVariants, headingVariants } from '@/components/page-header';
import AccordionList from '@/components/accordion-list';

const getFAQs = (location?: string) => {
    return [
        {
            question: 'What is deep clean?',
            answer: `A deep clean is for first-time customers or customers who haven't had their home professionally cleaned in the last three months. To see the extra things we do for deep cleans check out our`,
        },
        {
            question:
                'What is the difference between deep cleaning and regular cleaning?',
            answer: '',
        },
        {
            question: 'How long does it take to clean my house?',
            answer: `The duration of the cleaning process is contingent on your home's condition. A quick rule of thumb is to match the number of bedrooms with the estimated hours needed (e.g. 3 bedrooms would typically require around 3 hours)`,
        },
        {
            question: 'Are you insured?',
            answer: '',
        },
        {
            question:
                'What services are not included in your deep cleaning service?',
            answer: '',
        },
        {
            question: `What services are included in your deep cleaning service?`,
            answer: '',
        },
        {
            question: `What services are not included in your deep cleaning service?`,
            answer: '',
        },
        {
            question: `How often should I get a deep cleaning service?`,
            answer: '',
        },
        {
            question: `Can I book deep cleaning services online in ${location}?`,
            answer: '',
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
                            Have questions about our house cleaning in{' '}
                            {location}? Take a look below. Or call us on
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
