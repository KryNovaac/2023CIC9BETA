/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "aceternity.com",
          pathname: "/**", // Allow all paths
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          pathname: "/**", // Allow all paths
        },
        {
          protocol: "https",
          hostname: "assets.aceternity.com",
          pathname: "/**", // Allow all paths
        },
      ],
    },
  };
  
  export default nextConfig;
  