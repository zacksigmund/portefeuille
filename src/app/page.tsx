import { Icon } from "@/components/Icon";
import styles from "./page.module.css";
import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import { Link } from "@/components/Link";

export default function Home() {
  return (
    <Container className={styles.page}>
      <main className={styles.main}>
        <Flex direction="column" gap="3">
          <Heading as="h1">Zack Sigmund</Heading>
          <Text as="p">
            Hi, I'm Zack, a senior full stack software engineer based out of
            Cleveland, OH. This site is under construction.
          </Text>
          <Text as="p" lang="jp">
            日本語も話せます。
          </Text>
          <Flex direction="column" gap="2" asChild>
            <Text as="p">
              Connect with me
              <Flex as="span" gap="2">
                <Link
                  href="mailto:zack[at]zacksigmund.com"
                  aria-label="Connect with Zack over email"
                >
                  <Icon name="envelope" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/zacksigmund"
                  aria-label="Connect with Zack on LinkedIn"
                >
                  <Icon name="linkedin" />
                </Link>
                <Link
                  href="https://bsky.app/profile/zacksigmund.com"
                  aria-label="Connect with Zack on BlueSky"
                >
                  <Icon name="bluesky" />
                </Link>
              </Flex>
            </Text>
          </Flex>
        </Flex>
      </main>
    </Container>
  );
}
