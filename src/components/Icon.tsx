import {
  faBluesky,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconName = "envelope" | "linkedin" | "bluesky";

const ICON_MAP: Record<IconName, IconDefinition> = {
  envelope: faEnvelope,
  linkedin: faLinkedin,
  bluesky: faBluesky,
};

interface IconProps {
  name: IconName;
}

export function Icon({ name }: IconProps) {
  const definition = ICON_MAP[name];
  return <FontAwesomeIcon icon={definition} size="xl" />;
}
