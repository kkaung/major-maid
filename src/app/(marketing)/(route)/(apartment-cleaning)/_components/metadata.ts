import { getPathname } from '@/lib/next';
import { Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Apartment Cleaning Service ${location} | Book Online`,
        description:
            'Book your apartment cleaning service with our trusted and experience cleaners in 60 seconds.',
        alternates: {
            canonical: pathname,
        },
    };
};
