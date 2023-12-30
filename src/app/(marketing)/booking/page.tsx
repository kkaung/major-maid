import { BookingForm, BookingSummery } from '@/components/forms/booking-form';
import GridPattern from '@/components/magicui/grid-pattern';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import LiveReviews from './_components/live-reviews';
import PopularQuestions from './_components/popular-questions';

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Booking', href: '/booking' },
                ]}
                dottable={false}
            />
            <PageHeader className="relative mx-auto text-center">
                <PageHeaderHeading>
                    Get Pricing & Book In 60
                    <span className="text-primary ml-1">Seconds</span>
                </PageHeaderHeading>
                <PageHeaderDescription size="sm">
                    Super simple! Pick the industry you want to book for. Select
                    or fill the values in the fields, find the date and time you
                    want to book for and wait for a confirmation!
                </PageHeaderDescription>
                <GridPattern className="-z-10 stroke-gray-200 dark:stroke-gray-800  opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" />
            </PageHeader>
            <section className="flex flex-col items-start gap-6 mx-auto max-w-4xl w-full md:flex-row">
                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle>
                            Create a quote and complete your booking request.
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BookingForm />
                    </CardContent>
                </Card>
                <section className="grid gap-6 w-full md:max-w-[300px]">
                    <LiveReviews />
                    <BookingSummery className="w-full md:sticky md:top-12" />
                </section>
            </section>
        </Shell>
    );
}
