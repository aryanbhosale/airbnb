/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'airbnb13.p.rapidapi.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
        pathname: '**',
      },
    ],
  },
  env: {
    mapbox_key: "pk.eyJ1IjoiYXJ5YW5iaG9zYWxlIiwiYSI6ImNscjYxcjBvNzJjY3EybG52dGxiYTQwZnEifQ.suQLPnsTj28Gt6J34Tz46Q"
  }
}

module.exports = nextConfig