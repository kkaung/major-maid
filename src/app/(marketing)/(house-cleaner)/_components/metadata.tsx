import { Metadata } from 'next';
import { getPathname } from '@/lib/next';

export function getMetadata(location: string): Metadata {
    const pathname = getPathname();

    return {
        title: `${location}’s Premium House Cleaning Service`,
        description: `Top-rated house cleaning service in ${location}. With our 200% satisfaction guarantee, we're confident you'll love what we offer! Book online in 60 seconds.`,
        alternates: {
            canonical: pathname,
        },
    };
}
