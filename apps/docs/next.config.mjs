import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  contentDirBasePath: '/docs',
  readingTime: true,
  defaultShowCopyCode: true,

})

export default withNextra({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  transpilePackages: ['react-code-blocks'],
  experimental: {
    optimizePackageImports: ['@creation-ui/react'],
  },
})
