// next.config.mjs
import withMDX from '@next/mdx';

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

export default withMDXConfig(nextConfig);
