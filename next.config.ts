import type { NextConfig } from "next";
import type { RuleSetRule } from "webpack";

const nextConfig:NextConfig = {
  webpack(config) {
        const rules = config.module.rules as RuleSetRule[];

   const fileLoaderRule = rules.find(
      (rule): rule is RuleSetRule =>
        typeof rule !== "string" &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg")
    );

    if (!fileLoaderRule) {
      throw new Error("Could not find the existing SVG file loader rule.");
    }

    rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [ /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
