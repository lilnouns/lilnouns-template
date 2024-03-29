const incstr = require('incstr')

const classNames = {}

const generateClassName = incstr.idGenerator({
  alphabet: 'abcdefghijklmnopqrstuvwxyz',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: false,
    swcPlugins: [
      [
        '@lingui/swc-plugin',
        {
          // the same options as in .swcrc
        },
      ],
    ],
  },
  webpack: (config, { dev, isServer }) => {
    config.resolve.fallback = {
      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,

      fs: false,
    }

    if (!dev) {
      const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin')
      config.plugins.push(
        new MangleCssClassPlugin({
          classNameRegExp:
            '(([a-zA-Z-:]*)[\\\\\\\\]*:)*([\\\\\\\\]*!)?-?tw-[a-zA-Z-]([a-zA-Z0-9-]*([\\\\\\\\]*(\\%|\\#|\\.|\\[|\\]|\\/))*)*',
          log: process.env.NODE_ENV === 'development',
          classGenerator: (original, opts, context) => {
            if (classNames[original]) {
              return classNames[original]
            }

            let nextId

            do {
              // Class name cannot start with a number.
              nextId = generateClassName()
            } while (/^[0-9_-]/.test(nextId))

            return (classNames[original] = nextId)
          },
        }),
      )
    }

    return config
  },
}

module.exports = nextConfig
