import { Link } from "@/components/Link";
import { Flex, Heading, Text } from "@radix-ui/themes";

export default function Resume() {
  return (
    <Flex direction="column" gap="3">
      <Heading as="h1">Résumé</Heading>
      <Text as="p">
        HTML version pending until I update the doc version. In the meantime,{" "}
        <Link href="mailto:zack[at]zacksigmund.com">email me</Link> if you'd
        like a copy.
      </Text>
    </Flex>
  );
}
