import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBluesky, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Container, Flex, Heading, Link, Text } from "@radix-ui/themes";

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
          <Text as="p">
            Connect with me <br />
            <Flex as="span" gap="2">
              <Link
                href="mailto:zack[at]zacksigmund.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with Zack over email"
                color="gray"
              >
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/zacksigmund"
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with Zack on LinkedIn"
                color="gray"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </Link>
              <Link
                href="https://bsky.app/profile/zacksigmund.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with Zack on BlueSky"
                color="gray"
              >
                <FontAwesomeIcon icon={faBluesky} size="xl" />
              </Link>
            </Flex>
          </Text>
        </Flex>
      </main>
    </Container>
  );
}
