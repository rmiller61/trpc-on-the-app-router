// @ts-check
import withPlaiceholder from "@plaiceholder/next"

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "guestybookings.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "**public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "**guesty-listing-images**",
      },
      {
        protocol: "https",
        hostname: "stayawhilevill.wpengine.com",
      },
      {
        protocol: "https",
        hostname: "**cdn.filepicker.io**",
      },
      {
        protocol: "https",
        hostname: "**cdn.filestackcontent.com**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com**",
      },
      {
        protocol: "https",
        hostname: "assets.guesty.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/destinations/:city/:id",
        destination: "/destinations/:id",
        permanent: true,
      },
      {
        source: "/destinations/malibu",
        destination: `/destinations?cities=${encodeURIComponent("Malibu")}`,
        permanent: true,
      },
      {
        source: "/destinations/beverly-hills",
        destination: `/destinations?cities=${encodeURIComponent("Beverly Hills")}`,
        permanent: true,
      },
      {
        source: "/destinations/los-angeles",
        destination: `/destinations?cities=${encodeURIComponent("Los Angeles")}`,
        permanent: true,
      },
      {
        source: "/book-vacation-home-rentals-los-angeles",
        destination: "/blog/6-reasons-to-book-our-luxury-vacation-home-rentals-in-los-angeles",
        permanent: true,
      },
      {
        source: "/destinations/malibu-sa-carbon-beach-suites",
        destination: "/destinations?tags=Malibu%20Sand%20and%20Suites",
        permanent: true,
      },
      {
        source: "/list-your-home",
        destination: "/owners",
        permanent: true,
      },
      {
        source: "/luxury-transportation",
        destination: "/transportation",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/reasons-to-stay-malibu-luxury-vacation-rentals",
        destination: "/blog/6-reasons-to-stay-at-our-malibu-luxury-vacation-rentals",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/concierge",
        permanent: true,
      },
      {
        source: "/things-to-do-beverly-hills-vacation",
        destination:
          "/blog/5-things-to-do-in-beverly-hills-that-you-have-to-try-on-your-next-vacation",
        permanent: true,
      },
      {
        source: "/category/:path*",
        destination: "/blog",
        permanent: true,
      },
    ]
  },
  staticPageGenerationTimeout: 60 * 3, // Triple the default timeout
  experimental: {
    serverActions: true,
    /**logging: {
      level: "verbose",
      fullUrl: true,
    },**/
  },
}

export default withPlaiceholder(config)
