/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

// module.exports = withBundleAnalyzer({});

module.exports = withPlugins([
  [withCss(withPurgeCss())],
  [withBundleAnalyzer, {}],
]);
