import { Heading, Text } from "@radix-ui/themes";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { Link } from "./components/Link";

const components: MDXComponents = {
  h1: ({ children }) => (
    <Heading as="h1" size="8">
      {children}
    </Heading>
  ),
  h2: ({ children }) => <Heading as="h2">{children}</Heading>,
  p: ({ children }) => <Text as="p">{children}</Text>,
  a: (props) => <Link {...props} />,
  img: (props) => (
    <Image style={{ maxWidth: "100%", height: "auto" }} {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
