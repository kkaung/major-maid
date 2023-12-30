import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

interface WhyUsProps extends HTMLAttributes<HTMLElement> {}

export default function WhyUs({ ...props }: WhyUsProps) {
    return (
        <section
            id="why-us"
            aria-labelledby="why-us-heading"
            className={cn(props.className)}
        >
            <h2 className="text-3xl font-bold text-center">
                Why Book Your Cleaning Service With Us?
            </h2>
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-3">
                <div className="text-center">
                    <h3 className="text-lg font-semibold">Simple</h3>
                    <p className="text-muted-foreground mt-4">
                        Set up a regular cleaning schedule or book a one-time
                        cleaning service. Manage your bookings online, and
                        reschedule as you need.
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-semibold">Highly Trusted</h3>
                    <p className="text-muted-foreground mt-4">
                        Our professional cleaners are rated by thousands of
                        Sydneysiders, so you get the best of the best.
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-semibold">Convenient</h3>
                    <p className="text-muted-foreground mt-4">
                        You can relax knowing your cleaning team will arrive on
                        time and leave your home sparkling. Book your cleaning
                        service in 60 seconds.
                    </p>
                </div>
            </div>
        </section>
    );
}
