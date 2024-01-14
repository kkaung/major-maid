import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Top Rated Carpet Cleaning ${location} | Carpet Stain Removal`,
        description: `Book your carpet cleaning service with our trusted carpet cleaning technicians. Book and schedule your carpet cleaning job online in less than 60 seconds.`,
        alternates: {
            canonical: pathname,
        },
    };
};
