import { getPathname } from '@/lib/next';
import { Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Office Cleaning Service ${location} | Book Online`,
        description: ``,
        alternates: {
            canonical: pathname,
        },
    };
};
