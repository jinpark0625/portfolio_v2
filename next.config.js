/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

module.exports = withBundleAnalyzer(withCss(withPurgeCss()));
