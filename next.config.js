module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.md/,
			use: ['raw-loader']
    })
    return config
  },
}
