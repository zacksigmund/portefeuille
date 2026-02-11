import { Container, Flex, Heading } from "@radix-ui/themes";
import { Link } from "./Link";
import styles from "./Nav.module.css";
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
        <nav className={styles.nav}>
          <Link href="/" color="gray">
            <Heading size="7" asChild>
              <span>ZackSigmund.com</span>
            </Heading>
          </Link>
          <Flex justify="between" gap="6" asChild>
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
          </Flex>
        </nav>
      </Flex>
    </Container>
  );
}
