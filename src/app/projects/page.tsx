import { Link } from "@/components/Link";
import { Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import omniScreenshot from "./omni.png";
import sigfreedScreenshot from "./sigfreed.png";

export default function Projects() {
  return (
    <Flex direction="column" gap="3">
      <Heading as="h1" size="8">
        Projects
      </Heading>
      <Text as="p">A partial list of some of the cooler things I've done.</Text>
      <Heading as="h2">Omni Design System & Marketing Platform</Heading>
      <Image
        src={omniScreenshot}
        alt="Screenshot showing LibbyLife.com and DiscoverSora.com running side by side with similar components but unique branding."
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <Text as="p">
        When I first started my current role, all of our websites were being
        designed individually, each with their own themes and styles. We were
        dabbling in the idea of using a headless CMS to allow author-driven site
        updates, but the system was rigidly designed to the point that developer
        intervention was still needed for most updates.
      </Text>
      <Text as="p">
        I certainly didn't invent the idea of a design system. But I saw a need,
        I carved out some time to develop a prototype, and when{" "}
        <Link href="https://developer.overdrive.com">
          Developer Portal redesign
        </Link>{" "}
        came along, I took the opportunity to build it out with branded,
        reusable components (even though the design files didn't exactly call
        for that) and reusable content models in our CMS.
      </Text>
      <Text as="p">
        The <Link href="https://www.libbylife.com">Libby Life rebrand</Link> was
        easier, since its designer was bought into my idea and tried to do as
        much as possible with existing components. But this was still the
        proving ground for housing two brands in one system and making them
        sufficiently unique while reusing as much as possible.
      </Text>
      <Text as="p">
        <Link href="https://www.discoversora.com">Discover Sora</Link> was a bit
        more challenging as the designs were done for a standalone website and
        we already had a system in place that it had to somewhat conform to. But
        despite the friction, it was still a success. And this is where the
        system really proved itself, because we were able to stand up a Discover
        Sora blog with almost no developer intervention based on what we'd done
        for Libby Life, while at the same time Libby Life was able to light up
        its Book Clubs section using the Events & Webinars feature we'd
        developed for Discover Sora.
      </Text>
      <Text as="p">
        The system is really still in its infancy, and there is lots of work
        left to do (surveys, composable components, more flexible content
        models, and more...), but it's already proven its value in terms of user
        experience, brand consistency, designer simplification, developer
        reduction, ease of authorship, and time to market. I can't wait to see
        what else it can do.
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
        <Link href="https://zacksigmund.github.io/Sigfreed/">site</Link>.
      </Text>
      <Heading as="h2">This Site</Heading>
      <Text as="p">
        This website is pretty simple but pretty cool. Specifically:
      </Text>
      <Text asChild>
        <ul>
          <li>
            Know my strengths. I'm not a designer, so I'm using{" "}
            <Link href="https://www.radix-ui.com">Radix Themes</Link> for the
            styles.
          </li>
          <li>
            Don't reinvent the wheel. Radix Themes includes a bunch of
            components, so I don't take up my own time doing what's already been
            done.
          </li>
          <li>
            Lean. I don't need advanced capabilities, so I'm able to host for
            free with{" "}
            <Link href="https://docs.github.com/en/pages">GitHub Pages</Link>{" "}
            rather than self-host or pay for hosting.
          </li>
        </ul>
      </Text>
      <Text as="p">
        <Link href="https://github.com/zacksigmund/portefeuille">
          View the source code
        </Link>
        .
      </Text>
    </Flex>
  );
}
