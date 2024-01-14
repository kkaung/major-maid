import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: ``,
        description: ``,
        alternates: {
            canonical: pathname,
        },
    };
};
