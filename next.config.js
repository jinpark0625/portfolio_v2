/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({});
