import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
    headingVariants,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import React from 'react';
import AccordionList from '@/components/accordion-list';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const generalQuestions = [
    {
        question: 'How do I book my cleaning service?',
        answer:
            'To book your cleaning service, click the "Book Now" button. It only takes 60 seconds. Anticipate our confirmation on the same business day, specifying the appointment and arrival time. For immediate assistance, call us at ' +
            siteConfig.business.phone,
    },
    {
        question: 'Are you insured?',
        answer: `Certainly. We want you to feel completely at ease, knowing that we are fully insured. If you ever need proof of our insurance coverage, a quick email to ${siteConfig.business.email} is all it takes, and we'll promptly send you all the relevant documentation.`,
    },
    {
        question: 'Are your cleaning teams pet friendly?',
        answer: `Absolutely! Our cleaning teams are trained to handle dogs, cats, and other pets with love, respect, and care. We're a pet-friendly cleaning service.`,
    },
    {
        question: 'Do I have to be present for my home cleaning?',
        answer: `Absolutely not! Your call to stay or go. Just give us the key, and we'll handle the cleaning. ${siteConfig.name}, making life easier.`,
    },
    {
        question: 'What is the 100% Bond Back Guarantee?',
        answer: `Not satisfied with our end-of-lease cleaning? We'll re-clean for free if your agent isn't happy. Just report any issues within 3 days. Note: Only initially booked items are re-cleaned at no extra cost. Review our terms for details.`,
    },
    {
        question: 'What is your Satisfaction Guarantee?',
        answer: `Reach out to us within 24 hours post-cleaning to share your concerns. For end-of-lease or move-in cleaning, report concerns within a 72-hour window.\nWe'll schedule a complimentary re-clean on the next available business day, focusing on your specific areas of concern. If you're still dissatisfied after the re-clean, we'll reassess. If concerns persist, you'll receive a credit or refund accordingly.`,
    },
    {
        question: 'What forms of payment do you accept?',
        answer: `We accept payments through VISA, MasterCard, American Express, and Discover, covering both debit and credit cards. No processing fees are applied to any of our transactions. Regrettably, we do not take cash payments.`,
    },
];

const cleaningQuestions = [
    {
        question: 'How long will it take to clean my house?',
        answer: 'It all depends on the condition of your home. But, as a baseline, take the number of bedrooms you have and turn that into hours. (Ex. 3 bedrooms = 3 hours)',
    },
];

const schedulingQuestions = [
    {
        question:
            'Does someone have to visit my house before I can book a cleaning service?',
        answer: 'Absolutely not! We respect your privacy and avoid intrusive home visits. You can conveniently receive a quote and schedule your cleaning service online, completing the entire process in about 60 seconds.',
    },
    {
        question: 'Can I get a same-day booking?',
        answer: 'No assurance for same-day bookings, but we often meet the request depending on the day.',
    },
    {
        question: 'Does my cleaner arrive at the exact time I book?',
        answer: 'Generally, yes. However, to allow for potential delays caused by traffic or weather, we provide a one-hour arrival window. If your cleaner is running late, we will promptly contact you to provide an updated estimated time of arrival.',
    },
];

const billingQuestions = [
    {
        question: 'How do I pay for my home cleaning?',
        answer: "When scheduling your appointment, you'll need to provide us with a valid card, and we'll secure it with a hold the day before the cleaning. Please note that we won't process any charges until the booking is successfully completed. For our new clients, expect a courtesy call the day after the service to ensure your satisfaction. If you prefer alternative payment methods, feel free to reach out to us via phone or email.",
    },
    {
        question: 'What is your refund policy?',
        answer: "We guarantee 200% satisfaction. If unhappy, we'll re-clean within 72 hours. No satisfaction after re-clean? Money back, no questions.",
    },
];

const pricingQuestions = [
    {
        question: 'How much does your cleaning service cost?',
        answer: 'We can work off a flat rate if you’re looking for something like a whole house clean, or an hourly rate if you are looking for a couple hours of cleaning here or there. Our hourly rates start at $65/hr and flat rates at $159. We also offer discounts if you book regular cleaning services.',
    },
    {
        question: 'Are your prices negoitable?',
        answer: 'No, our rates are calculated by the information you provide on our booking page. We provide some of the best rates in the industry for the high-quality cleaning service we provide.',
    },
];

export default function Page() {
    return (
        <Shell className="gap-16 max-w-7xl">
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    {
                        title: 'Frequently Asked Questions',
                        href: '/frequently-asked-questions',
                    },
                ]}
                dottable={false}
            />
            <PageHeader className="text-center relative space-y-3">
                <PageHeaderHeading>
                    Find Answers to Your Questions
                </PageHeaderHeading>
                <PageHeaderDescription className="mx-auto" size="sm">
                    Can&apos;t find an answer? Call us at
                    <span className="text-primary/80 font-medium mx-1">
                        {siteConfig.business.phone}
                    </span>
                    or email
                    <span className="text-primary/80 font-medium ml-1">
                        {siteConfig.business.email}
                    </span>
                </PageHeaderDescription>
            </PageHeader>
            <div className="max-w-5xl w-full mx-auto space-y-12">
                <section id="general" aria-labelledby="general-heading">
                    <h2
                        className={cn(
                            headingVariants({
                                size: 'sm',
                            })
                        )}
                    >
                        General
                        <span className="sr-only">General Questions</span>
                    </h2>
                    <AccordionList items={generalQuestions} />
                </section>
                <section id="cleaning" aria-labelledby="cleaning-heading">
                    <h2
                        className={cn(
                            headingVariants({
                                size: 'sm',
                            })
                        )}
                    >
                        Cleaning
                        <span className="sr-only">Cleaning Questions</span>
                    </h2>
                    <AccordionList items={cleaningQuestions} />
                </section>
                <section id="scheduling" aria-labelledby="scheduling-heading">
                    <h2
                        className={cn(
                            headingVariants({
                                size: 'sm',
                            })
                        )}
                    >
                        Scheduling
                        <span className="sr-only">Scheduling Questions</span>
                    </h2>
                    <AccordionList items={schedulingQuestions} />
                </section>
                <section id="billing" aria-labelledby="billing-heading">
                    <h2
                        className={cn(
                            headingVariants({
                                size: 'sm',
                            })
                        )}
                    >
                        Billing
                        <span className="sr-only">Billing Questions</span>
                    </h2>
                    <AccordionList items={billingQuestions} />
                </section>
                <section id="pricing" aria-labelledby="pricing-heading">
                    <h2
                        className={cn(
                            headingVariants({
                                size: 'sm',
                            })
                        )}
                    >
                        Pricing
                        <span className="sr-only">Pricing Questions</span>
                    </h2>
                    <AccordionList items={pricingQuestions} />
                </section>
            </div>
        </Shell>
    );
}
