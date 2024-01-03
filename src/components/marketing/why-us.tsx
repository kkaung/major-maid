import React, { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { headingVariants } from '@/components/page-header';
import Image from 'next/image';
import { Icons } from '@/components/icons';

import HouseCleaner from '/public/assets/images/house-cleaner.png';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

interface WhyUsProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function WhyUs({ location = 'Sydney', ...props }: WhyUsProps) {

    return (
        <section
            id="why-us"
            aria-labelledby="why-us-heading"
            className={cn(
                props.className,
                'grid py-6 px-4 rounded-3xl items-center gap-6 md:grid-cols-2'
            )}
        >
            <div className="relative">
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 w-1/4 bg-gradient-to-t from-white bg-black z-10" />
                <Image
                    width={400}
                    height={400}
                    src={HouseCleaner}
                    alt={'House Cleaner'}
                />
                <div className="broder rounded-xl p-2 bg-secondary inline-flex gap-4 absolute top-0 left-0 translate-y-1/3 sm:p-4">
                    <Avatar>
                        <AvatarImage
                            src="https://storage.googleapis.com/postcrafts-public-content/headshotpro/reviews/654baf5422e37754a053af88-654bc145118b7bd49f81f32d.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=firebase-adminsdk-hu3sa%40stockai-362303.iam.gserviceaccount.com%2F20240103%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240103T054906Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=270cba610d6af8502d823d17a8fbb9d2d78916e541e0d641173d0fea11a688b5b41641db87a0500080ef4a93243190c5ff957bd17d926637f8b90d5ee7950e291484f84de034f6ae9ef92043a90ce41b8675ae94869e592c0d196d3c70b88a8be54f20a6c0ad405288a3bccb695cf54e6ef077024eaa9f210b01a709a309f7a9de097dfc493f9a90419d24a17f8590d81ccaf74e4dd00856792c53a2bb62a38f2bff357ef93c7ca839650259845cfbf5531c3f4b672dd33bc85aa07d9177b66d62a7657a51893a9022d6214918178d1e96f258dac25434dff8291b734f13fa81804f9ce50dfe0e53efea383427eb519157bbc25d6f2f36bbfb2955a71be5e0ad"
                            alt="User Avatra"
                            className="bg-cover object-cover"
                        />
                    </Avatar>
                    <div>
                        <p className="flex items-center font-semibold">
                            5
                            <Icons.starFull
                                className="ml-1 w-4 h-4 inline text-yellow-500"
                                aria-hidden
                            />
                            <Icons.starFull
                                className="ml-1 w-4 h-4 inline text-yellow-500"
                                aria-hidden
                            />
                            <Icons.starFull
                                className="ml-1 w-4 h-4 inline text-yellow-500"
                                aria-hidden
                            />
                            <Icons.starFull
                                className="ml-1 w-4 h-4 inline text-yellow-500"
                                aria-hidden
                            />
                            <Icons.starFull
                                className="ml-1 w-4 h-4 inline text-yellow-500"
                                aria-hidden
                            />
                        </p>
                        <p className="font-medium leading-none">
                            Overall Rating
                        </p>
                    </div>
                </div>
            </div>
            <div className="space-y-12">
                <h2 className={cn(headingVariants({}))}>
                    Why Book Your Cleaning Service With Us?
                </h2>
                <div className="space-y-6">
                    <div className="relative">
                        <Icons.checkCircle
                            className="w-5 h-5 absolute top-0 left-0 text-primary"
                            strokeWidth={3}
                            aria-hidden
                        />
                        <div className="ml-9">
                            <h3 className="text-lg font-semibold leading-none mb-2">
                                Simple
                            </h3>
                            <p className="text-muted-foreground">
                                Set up a regular cleaning schedule or book a
                                one-time cleaning service. Manage your bookings
                                online, and reschedule as you need.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <Icons.checkCircle
                            className="w-5 h-5 absolute top-0 left-0 text-primary"
                            strokeWidth={3}
                            aria-hidden
                        />
                        <div className="ml-9">
                            <h3 className="text-lg font-semibold leading-none mb-2">
                                Highly Trusted
                            </h3>
                            <p className="text-muted-foreground">
                                Our professional cleaners are rated by thousands
                                of Sydneysiders, so you get the best of the
                                best.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <Icons.checkCircle
                            className="w-5 h-5 absolute top-0 left-0 text-primary"
                            strokeWidth={3}
                            aria-hidden
                        />
                        <div className="ml-9">
                            <h3 className="text-lg font-semibold leading-none mb-2">
                                Convenient
                            </h3>
                            <p className="text-muted-foreground">
                                You can relax knowing your cleaning team will
                                arrive on time and leave your home sparkling.
                                Book your cleaning service in 60 seconds.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link
                        href="/booking"
                        className={cn(
                            buttonVariants({
                                size: 'lg',
                            }),
                            'font-semibold rounded-full'
                        )}
                    >
                        Book online now
                    </Link>
                </div>
            </div>
        </section>
    );
}
