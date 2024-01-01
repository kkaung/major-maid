import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';

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
            <ul className="grid grid-cols-1 gap-6 grid-flow-row md:grid-cols-3">
                <li>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <div className="bg-primary h-8 w-8 rounded text-white mr-2 inline-flex items-center justify-center">
                                    1
                                </div>
                                Book Online
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium">
                                Book your Sydney house cleaning service online
                                in 60 seconds.
                            </p>
                        </CardContent>
                    </Card>
                </li>
                <li>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <div className="bg-primary h-8 w-8 rounded text-white mr-2 inline-flex items-center justify-center">
                                    2
                                </div>
                                We Clean
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium">
                                Our cleaners in Sydney will come over &
                                professionally clean your home.
                            </p>
                        </CardContent>
                    </Card>
                </li>
                <li>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <div className="bg-primary h-8 w-8 rounded text-white mr-2 inline-flex items-center justify-center">
                                    3
                                </div>
                                You Relax
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium">
                                Sit back, relax and enjoy your sparkling clean
                                home.
                            </p>
                        </CardContent>
                    </Card>
                </li>
            </ul>
        </section>
    );
}
