const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      module: false,
      v8: false,
      perf_hooks: false,
    };

    return config;
  },
};

module.exports = nextConfig;
