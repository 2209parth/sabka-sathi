import { MetadataRoute } from 'next';
import { locationContent } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const locationRoutes = Object.keys(locationContent).map((slug) => ({
    url: `https://sabkasathi.com/location/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: 'https://sabkasathi.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...locationRoutes,
    // Add other routes here as they become available
  ];
}
