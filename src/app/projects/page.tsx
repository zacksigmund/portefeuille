import { Link } from "@/components/Link";
import { Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import sigfreedScreenshot from "./sigfreed.png";

export default function Projects() {
  return (
    <Flex direction="column" gap="3">
      <Heading as="h1" size="8">
        Projects
      </Heading>
      <Text as="p">A partial list of some of the cooler things I've done.</Text>
      <Heading as="h2">Marketing platform</Heading>
      <Text as="p">
        I'd better double check how much of this I'm allowed to discuss…
      </Text>
      <Heading as="h2">Sigfreed</Heading>
      <Image
        src={sigfreedScreenshot}
        alt="Screenshot of Sigfreed app showing Solitaire and Calculator open"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <Text as="p">
        A retro/nostalgic desktop-on-the-web, for when you just want something
        simple that works. The vibes are inspired heavily by{" "}
        <Link href="https://www.lexaloffle.com/picotron.php">Picotron</Link>,
        but the objective is pretty much the reverse: open source but closed
        platform. It's all vanilla JavaScript; there are no frameworks and no
        build. Check out the{" "}
        <Link href="https://github.com/zacksigmund/Sigfreed">repo</Link> and the{" "}
        <Link href="https://sigfreed.app">site</Link>.
      </Text>
    </Flex>
  );
}
