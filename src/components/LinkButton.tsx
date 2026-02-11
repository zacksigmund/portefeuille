import { Button } from "@radix-ui/themes";
import { Link, LinkProps } from "./Link";

type LinkButtonProps = LinkProps;

export function LinkButton(props: LinkButtonProps) {
  return (
    <Button variant="ghost" size="4" asChild>
      <Link {...props} />
    </Button>
  );
}
