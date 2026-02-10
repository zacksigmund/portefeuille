import { default as NextLink } from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface LinkProps
  extends
    React.PropsWithChildren,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, ...rest }: LinkProps) {
  const newTab = href?.includes(":");
  const targetProps = newTab
    ? {
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <RadixLink color="gray" asChild>
      <NextLink href={href} {...targetProps} {...rest}>
        {children}
      </NextLink>
    </RadixLink>
  );
}
