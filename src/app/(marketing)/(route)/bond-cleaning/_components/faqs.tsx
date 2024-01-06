import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';
import { descriptionVariants, headingVariants } from '@/components/page-header';
import AccordionList from '@/components/accordion-list';

const getFAQs = (location?: string) => {
    return [
        { question: 'Do you offer a bond back guarantee?', answer: '' },
        { question: 'How much do you charge?', answer: '' },
        { question: 'Is your quote final?', answer: '' },
        {
            question: 'How long will my bond cleaning service take?',
            answer: '',
        },
        {
            question:
                'Do I need to be present during the bond cleaning process?',
            answer: '',
        },
        {
            question: 'How many people will come to clean my house?',
            answer: '',
        },
        {
            question: 'Are you insured?',
            answer: '',
        },
        {
            question: 'Are your cleaning teams professionals?',
            answer: '',
        },
        {
            question: 'Can I get a receipt to show my landlord?',
            answer: '',
        },
        {
            question:
                'My agent has a specific checklist, are you able to help?',
            answer: '',
        },
        {
            question: 'Is carpet steam cleaning included?',
            answer: '',
        },
        {
            question: 'What is your cancellation policy?',
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
