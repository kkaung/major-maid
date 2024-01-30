import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Vacate Cleaning ${location} | 100% Bond Back Guarantee`,
        description:
            'Book your vacate cleaning service with our trusted cleaners. We guarantee you will get 100% of your bond back.Book online in under 60 seconds.',
        alternates: {
            canonical: pathname,
        },
    };
};
