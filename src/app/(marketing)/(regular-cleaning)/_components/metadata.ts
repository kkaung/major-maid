import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Regular Cleaning ${location} | Get An Instant Price & Book Online`,
        description: `Book your regular house cleaning service with our vetted cleaners in 60 seconds. The ${location}'s best domestic cleaners and home cleaning service.`,
        alternates: {
            canonical: pathname,
        },
    };
};
