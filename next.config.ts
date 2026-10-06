import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import rehypeMdxImportMedia from "rehype-mdx-import-media";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactCompiler: true,
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeMdxImportMedia],
  },
});

export default withMDX(nextConfig);
