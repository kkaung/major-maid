import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';
import Balancer from 'react-wrap-balancer';
import { descriptionVariants, headingVariants } from '@/components/page-header';
import { Icons } from '@/components/icons';
import { siteConfig } from '@/configs/site';
import Marquee from '@/components/magicui/marquee';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const reviews = [
    {
        name: 'Emily',
        body: 'Ask for Angie A amazing job done for my house! Call them asap if you need a clean!',
    },
    {
        name: 'Dora',
        body: 'Our cleaner took such care and really took his time to make sure my apartment was properly cleaned and even did some nice finishing touches like arranging the cushions better than I ever can!',
    },
    {
        name: 'Durden',
        body: 'I am very satisfied with cleaning service. Brenda was extremely thorough, and my place is spotless! Highly recommend.',
    },
    {
        name: 'Kelly',
        body: 'Vivi and the team arrived punctually, were very friendly, professional and did a great job. Highly recommend.',
    },
    {
        name: 'John',
        body: 'Amazing job unit was spotless really happy with the result would use for end of lease clean.',
    },
    {
        name: 'Alex',
        body: 'Amazing job unit was spotless really happy with the result would use for end of lease clean.',
    },
];

interface ReviewsProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function Reviews({ location, ...props }: ReviewsProps) {
    return (
        <div style={{ width: '100%', overflowX: 'hidden' }}>
            <section
                id="reviews"
                aria-labelledby="reviews-heading"
                className={cn(
                    props.className,
                    'relative space-y-6 w-full overflow-hidden py-12'
                )}
            >
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className={cn(headingVariants({}))}>
                            <Balancer>What Our Customers Are Saying</Balancer>
                        </h2>
                    </div>
                    <div className="space-y-5">
                        <Marquee
                            pauseOnHover
                            className="transform-cpu [--duration:150s]"
                        >
                            {reviews.map(review => (
                                <ReviewCard key={review.name} {...review} />
                            ))}
                        </Marquee>
                        <Marquee
                            pauseOnHover
                            reverse
                            className="transform-cpu [--duration:150s]"
                        >
                            {reviews.map(review => (
                                <ReviewCard key={review.name} {...review} />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </section>
        </div>
    );
}

interface ReviewCardProps extends HTMLAttributes<HTMLElement> {
    name: string;
    body: string;
}

function ReviewCard({ name, body, ...props }: ReviewCardProps) {
    return (
        <div
            className={cn(
                props.className,
                'h-full w-60 min-w-[20rem] leading-tight border rounded-xl p-4 bg-secondary ml-2'
            )}
        >
            <div className="flex justify-between">
                <div className="space-y-2">
                    <div className="flex gap-2">
                        <div>
                            <h6 className="font-medium">{name}</h6>
                        </div>
                    </div>
                    <q className="text-sm italic text-foreground/80">{body}</q>
                </div>
                <div>
                    <Icons.fullGoogle className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
}
