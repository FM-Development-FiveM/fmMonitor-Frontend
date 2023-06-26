const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'fm-build',
    output: 'standalone',
    assetPrefix: isProd ? 'https://cdn.bluelineentertainment.net/fmMonitor/' : undefined,
    poweredByHeader: false,
    env: {
        pageTitle: 'fmMonitor',
        NEXTAUTH_URL: isProd ? 'https://test.fmmonitor.xyz' : 'http://localhost:3000',
    },
}

module.exports = nextConfig
