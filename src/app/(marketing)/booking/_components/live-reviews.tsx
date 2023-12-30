import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

interface LiveReviewsProps extends HTMLAttributes<HTMLElement> {}

export default function LiveReviews({ ...props }: LiveReviewsProps) {
    return (
        <Card
            id="live-reviews"
            aria-labelledby="live-reviews"
            className={cn(props.className)}
        >
            <CardHeader>
                <CardTitle>Live Reviews</CardTitle>
            </CardHeader>
            <CardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                adipisci.
            </CardContent>
        </Card>
    );
}
