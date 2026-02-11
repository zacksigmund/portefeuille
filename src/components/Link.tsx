import { default as NextLink } from "next/link";
import {
  Link as RadixLink,
  LinkProps as RadixLinkProps,
} from "@radix-ui/themes";

export interface LinkProps extends React.PropsWithChildren, RadixLinkProps {
  href: string;
}

export function Link({ href, color, children, ...rest }: LinkProps) {
  const newTab = href?.includes(":");
  const targetProps = newTab
    ? {
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <RadixLink color={color} asChild>
      <NextLink href={href} {...targetProps} {...rest}>
        {children}
      </NextLink>
    </RadixLink>
  );
}
