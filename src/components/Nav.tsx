import { Container, Flex, Heading, Reset } from "@radix-ui/themes";
import { Link } from "./Link";
import { LinkButton } from "./LinkButton";

export function Nav() {
  return (
    <Container>
      <Flex
        direction={{ initial: "column", sm: "row" }}
        gap="4"
        justify="between"
        align="center"
        m="5"
        asChild
      >
        <nav>
          <Link href="/" color="gray">
            <Heading size="7" asChild>
              <span>ZackSigmund.com</span>
            </Heading>
          </Link>
          <Flex justify="between" gap="6" asChild>
            <Reset>
              <ul>
                <li>
                  <LinkButton href="/about">About</LinkButton>
                </li>
                <li>
                  <LinkButton href="/projects">Projects</LinkButton>
                </li>
                <li>
                  <LinkButton href="/resume">Resume</LinkButton>
                </li>
              </ul>
            </Reset>
          </Flex>
        </nav>
      </Flex>
    </Container>
  );
}
