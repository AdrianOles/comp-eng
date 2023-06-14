/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: [
            "images.pexels.com",
            "cdn-icons-png.flaticon.com"
        ]
    }
}

module.exports = nextConfig
