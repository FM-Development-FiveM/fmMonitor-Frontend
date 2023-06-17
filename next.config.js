/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'fm-build',
    output: 'standalone',
    env: {
        pageTitle: 'fmMonitor'
    }
}

module.exports = nextConfig
