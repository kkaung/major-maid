import { getPathname } from '@/lib/next';
import { Metadata } from 'next';

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
