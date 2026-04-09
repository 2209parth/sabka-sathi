import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sabkasathi.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    { url: 'https://sabkasathi.com/software-company-gujarat', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://sabkasathi.com/software-company-maharashtra', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://sabkasathi.com/software-company-bihar', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://sabkasathi.com/web-development', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://sabkasathi.com/app-development', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://sabkasathi.com/custom-software', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Add other routes here as they become available
  ];
}
