import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Move In - Move Out Cleaning Service ${location}`,
        description: `Looking for a reliable cleaner to help you move home? Choose ${location}'s top-rated moving cleaners for 100% satisfaction. Book online in less than 60 seconds.`,
        alternates: {
            canonical: pathname,
        },
    };
};
