/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: !debug ? 'https://themrcesi.github.io/' : ''
};

export default nextConfig;
