const createNextIntlPlugin = require('next-intl/plugin');
 const withNextIntl = createNextIntlPlugin();


/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "./_mantine.scss";`,
  },
}

module.exports = withNextIntl(nextConfig)
