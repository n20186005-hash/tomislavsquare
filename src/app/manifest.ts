import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Trg Kralja Tomislava – Zagreb Visitor Guide',
    short_name: 'Tomislav Square',
    description:
      'Visitor guide to Trg Kralja Tomislava (King Tomislav Square) in Zagreb, Croatia: park, monument, Art Pavilion and the Green Horseshoe.',
    start_url: '/hr',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3a7a8d',
    icons: [
      {
        src: '/icons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
