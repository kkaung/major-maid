import { getPathname } from '@/lib/next';
import { Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Oven Cleaning Service ${location} | Book Online`,
        description: `Are you are looking for Oven Cleaning of your home in ${location}? Book online in 60 seconds.`,
        alternates: {
            canonical: pathname,
        },
    };
};
