/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: [
          "test",
        ],
      },
}

module.exports = nextConfig
