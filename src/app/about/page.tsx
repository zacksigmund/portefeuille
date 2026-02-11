import { Flex, Heading, Text } from "@radix-ui/themes";

export default function About() {
  return (
    <Flex direction="column" gap="3">
      <Heading as="h1" size="8">
        About me
      </Heading>
      <Text as="p">
        I was born and raised in Cleveland, OH. After high school, I moved to
        Rochester, NY and attended Rochester Institute of Technology for
        Computer Engineering, from which I graduated with honors.
      </Text>
      <Text as="p">
        An offer from Microsoft upon graduation brought me out to Seattle, WA
        after that. I was there for over 7 years, working on internal tooling
        for the first half and Power Automate for the second half. Then the
        pandemic came along and over time got me to reconsider my priorities, as
        it did for many others. Which ultimately made me realize I needed to
        take some time for myself, do some travel, and spend more time with my
        family back east while I figured out what was next. So I moved back to
        Cleveland.
      </Text>
      <Text as="p">
        After my break, I decided to stay in Cleveland and ended up at
        OverDrive. There, my main claim to fame so far&mdash;for which I
        received company-wide recognition&mdash;is creating our brand new
        marketing platform, featuring a multi-branded design system to support
        our broad portfolio of products, and a headless CMS implementation that
        makes it easy for content authors to use the designs. I can't wait to
        see what's next!
      </Text>
    </Flex>
  );
}
