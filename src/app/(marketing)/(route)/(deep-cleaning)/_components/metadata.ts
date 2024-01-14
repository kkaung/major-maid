import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Best Deep Cleaning Service ${location}`,
        description: `Book your deep cleaning service with our trusted cleaners in 60 seconds. The ${location}'s best domestic cleaners and home cleaning service.`,
        alternates: {
            canonical: pathname,
        },
    };
};
