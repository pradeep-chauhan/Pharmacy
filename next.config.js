/** @type {import('next').NextConfig} */
/*
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

*/


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig



/*
module.exports = {
  experimental: {
      images: {
          allowFutureImage: true
      }
  },
  // Rest of the config
  reactStrictMode: true,
  swcMinify: true,
}
*/