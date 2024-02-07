import { type MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/utils';
import { allPosts, allPages, allAuthors } from 'contentlayer/generated';
import { locations } from '@/configs/location';
import { siteServices } from '@/configs/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const cities = ['sydney', 'melbourne'];

    const pagesRoutes = allPages.map(page => ({
        url: absoluteUrl(`/${page.slugAsParams}`),
        lastModified: new Date().toISOString(),
    }));

    const postsRoutes = allPosts.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const allLocations: string[] = locations.reduce<string[]>(
        (result, city) => {
            result.push(city.title.toLowerCase());

            city.items.forEach(item => result.push(item.title.toLowerCase()));
            return result;
        },
        []
    );

    const citiesServicesRoutes = cities
        .flatMap(city => {
            return siteServices.map(service => `/${service.slug}-${city}`);
        })
        .map(route => ({
            url: absoluteUrl(route),
            lastModified: new Date().toISOString(),
        }));

    const authorsRoutes = allAuthors.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const routes = [
        '',
        '/frequently-asked-questions',
        '/locations',
        '/checklist',
        '/carrers',
        '/pricing',
        '/blog',
        '/cleaning-services',

        '/house-cleaner-sydney',
        '/house-cleaner-melbourne',
        
    ].map(route => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString(),
    }));

    return [
        ...citiesServicesRoutes,
        ...routes,
        ...pagesRoutes,
        ...postsRoutes,
        ...authorsRoutes,
    ];
}
