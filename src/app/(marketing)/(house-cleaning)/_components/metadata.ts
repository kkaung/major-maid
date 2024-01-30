import { Metadata } from 'next';
import { getPathname } from '@/lib/next';

export function getMetadata(location: string): Metadata {
    const pathname = getPathname();

    return {
        title: `Professional House Cleaning Service ${location}`,
        description: `Book your house cleaning service with our vetted cleaners in 60 seconds. The ${location}'s best domestic cleaners and home cleaning service.`,
        alternates: {
            canonical: pathname,
        },
    };
}
