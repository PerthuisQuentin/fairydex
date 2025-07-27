import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'FairyDex',
        short_name: 'FairyDex',
        description: 'Informations and tools for Zenless Zone Zero',
        start_url: '/',
        display: 'standalone',
        background_color: '#242424',
        theme_color: '#242424',
        icons: [
            {
                src: '/web-app-manifest-96x96.png',
                sizes: '96x96',
                type: 'image/png'
            },
            {
                src: '/web-app-manifest-96x96.png',
                sizes: '96x96',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/web-app-manifest-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/web-app-manifest-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/favicon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
                purpose: 'any'
            }
        ],
    };
}
