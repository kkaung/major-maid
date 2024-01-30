import { getPathname } from '@/lib/next';
import { Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Tile & Grout Cleaning ${location} | Book Online`,
        description:
            'Book your tile and grout cleaning service with our trusted cleaners.Book online in under 60 seconds.',
        alternates: {
            canonical: pathname,
        },
    };
};
