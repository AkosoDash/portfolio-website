/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://static.promediateknologi.id/**")],
  },
};

export default nextConfig;
