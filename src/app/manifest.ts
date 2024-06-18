import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Radio Reaper',
        short_name: 'Radio Reaper',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#b4a088',
        theme_color: '#b4a088',
        lang: 'en-US',
        orientation: 'any',
        icons: [
            {
                src: 'manifest/icon-44.png',
                sizes: '44x44',
                type: 'image/png',
            },
            {
                src: 'manifest/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: 'manifest/icon-256.png',
                sizes: '256x256',
                type: 'image/png',
            },
            {
                src: 'manifest/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: 'manifest/icon-1024.png',
                sizes: '1024x1024',
                type: 'image/png',
            },
            {
                src: 'manifest/icon-512-maskable.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: 'manifest/icon-1024-maskable.png',
                sizes: '1024x1024',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
    }
}
