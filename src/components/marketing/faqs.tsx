import { Icons } from '@/components/icons';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';
import { descriptionVariants, headingVariants } from '@/components/page-header';

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
                        <p className={descriptionVariants({ size: 'sm' })}>
                            Have questions about our house cleaning in Sydney?
                            Take a look below. Or call us on
                            <span className="text-primary ml-1">
                                1300 905 032
                            </span>
                            .
                        </p>
                    </div>
                </div>
                <div>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-4"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">
                                How can I get a quote for a cleaning service in
                                {location}?
                            </AccordionTrigger>
                            <AccordionContent>
                                For a quote on a cleaning service in {location},
                                simply click “Quote Me” and then fill in the
                                booking form. Our system will generate an
                                automatic quote based on what you need and how
                                big your home is.
                                <br /> We use the number of bedrooms and
                                bathrooms to calculate the size of your home and
                                optional extra let you customise the service if
                                you need anything more than a general clean.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg">
                                Will you provide equipment??
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes, when you book a cleaning service in Sydney,
                                our cleaners will provide all the equipment and
                                chemicals to get your home spotless. The
                                equipment and chemicals are provided free of
                                charge. <br /> However, if you’d prefer for the
                                cleaners to use your own equipment of products,
                                then simply ask them on the day and they will be
                                happy to oblige. We can even use eco-friendly or
                                organic cleaning products.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg">
                                How long will it take to clean my home?
                            </AccordionTrigger>
                            <AccordionContent>
                                That depends on the size of your home and what
                                you need done! Our system is designed to use the
                                number of bedrooms and bathrooms to estimate the
                                size of your home. If you add any extras then
                                that will also add time to your job. <br /> The
                                time estimates are not shown when you make a
                                booking online. This estimate of the total
                                number of work hours needed is used for
                                administration purposes only and can be provided
                                on request.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg">
                                Do I have to be home when the cleaners come?
                            </AccordionTrigger>
                            <AccordionContent>
                                No, you don’t! Many of our clients who receive
                                cleaning services in Sydney choose to leave a
                                key for the cleaners so they can take advantage
                                of their free time.
                                <br /> The professionals who conduct our home
                                cleaning in Sydney are background checked, so
                                you’re in safe hands.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-lg">
                                How can I book a cleaning service in Sydney?
                            </AccordionTrigger>
                            <AccordionContent>
                                To book home cleaning in Sydney, simply fill in
                                the booking form so we can estimate the cost
                                based on your needs. Then enter your card
                                details and click book.
                                <br /> We’ll match you with a team of
                                experienced, professional who specialise in home
                                cleaning in Sydney, and then send you an email
                                to confirm your booking.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-lg">
                                When are the cleaners available to come?
                            </AccordionTrigger>
                            <AccordionContent>
                                We have a lot of cleaners who provide house
                                cleaning in Sydney, so we have availability
                                almost all of the time. If you can book it
                                online, then it is almost certain that the time
                                you’ve request is available.
                                <br /> Just in case we aren’t available for the
                                exact time you request, be sure to let us know
                                if the day and/or time of your request is
                                flexible so that we can match you with cleaners
                                are quickly as possible.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger className="text-lg">
                                How many cleaners will come to my home?
                            </AccordionTrigger>
                            <AccordionContent>
                                That depends on which of our cleaners are
                                available in your area at the time and day
                                you’ve requested the service to take place.
                                <br /> For most cleaning services, it’s usually
                                at least 2 people. For smaller jobs (2-3 hours),
                                it may only be one person, but for bigger jobs
                                (+3 hours), it’s usually a minimum of two
                                cleaners.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-8">
                            <AccordionTrigger className="text-lg">
                                How do I pay for my cleaning services?
                            </AccordionTrigger>
                            <AccordionContent>
                                When you make a booking, you will enter your
                                card details, which are stored in a secure,
                                encrypted format (even we can’t see them!).
                                <br /> Payments are only processed after your
                                home cleaning service is complete.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
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
