import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Spring Cleaning Service ${location} | 100% Bond Back Guarantee`,
        description:
            'Book your spring cleaning service with our trusted cleaners. Book online in 60 seconds.',
        alternates: {
            canonical: pathname,
        },
    };
};
