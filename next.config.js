// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['quintagroup.com', 'miro.medium.com', 'upload.wikimedia.org', 'www.jetbrains.com', 'logos-download.com', 'banner2.cleanpng.com', 'gurzu.com', 'w7.pngwing.com', 'www.xchangetraining.co.uk', 'cdn.worldvectorlogo.com', 'encrypted-tbn0.gstatic.com']
  },
};
