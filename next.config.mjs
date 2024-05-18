import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
};

export default nextConfig;

//https://nextjs.org/docs/app/building-your-application/styling/sass
const currentDirUrl = new URL(import.meta.url);
const currentDirPath = path.dirname(currentDirUrl.href);

export const sassOptions = {
    includePaths: [path.join(currentDirPath, 'styles')],
};
