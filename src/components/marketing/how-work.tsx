import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

interface HowWorkProps extends HTMLAttributes<HTMLElement> {}

export default function HowWork({ ...props }: HowWorkProps) {
    return (
        <section
            id="how-work"
            aria-labelledby="how-work-heading"
            className={cn(props.className, 'space-y-6')}
        >
            <h2 className="text-4xl font-semibold text-center">
                How {siteConfig.name} Works
            </h2>
            <ul className="grid grid-cols-3 gap-6">
                <li>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <div className="bg-primary h-8 w-8 rounded text-white mr-1 inline-flex items-center justify-center">
                                    1
                                </div>
                                Quote
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            First, get a customised quote for cleaning services
                            in Sydney with our online booking form.
                        </CardContent>
                    </Card>
                </li>
                <li>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <div className="bg-primary h-8 w-8 rounded text-white mr-1 inline-flex items-center justify-center">
                                    2
                                </div>
                                Match
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Complete your booking and we’ll match you with
                            experienced, professional cleaners.
                        </CardContent>
                    </Card>
                </li>
                <li>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <div className="bg-primary h-8 w-8 rounded text-white mr-1 inline-flex items-center justify-center">
                                    3
                                </div>
                                Pay
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Payments processed securely and automatically after
                            your cleaning service is complete.
                        </CardContent>
                    </Card>
                </li>
            </ul>
        </section>
    );
}
