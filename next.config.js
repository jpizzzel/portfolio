module.exports = {
    reactStrictMode: true,
    async headers() {
      return [
        {
          // The worker filename includes its version, so it's safe to cache forever
          source: '/pdf.worker.:version([0-9.]+).min.mjs',
          headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
        },
      ];
    },
    webpack: (config) => {
      // Use pdf.js's legacy build, which polyfills URL.parse and
      // Promise.withResolvers for older mobile browsers (e.g. iOS 17 Safari)
      config.resolve.alias['pdfjs-dist$'] = 'pdfjs-dist/legacy/build/pdf.mjs';
      return config;
    },
};
