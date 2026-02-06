import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBluesky, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Zack Sigmund</h1>
          <p>
            Hi, I'm Zack, a senior full stack software engineer based out of
            Cleveland, OH. This site is under construction.
          </p>
          <p>
            Connect with me <br />
            <span className={styles.socials}>
              <a
                href="mailto:zack[at]zacksigmund.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with Zack over email"
              >
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/zacksigmund"
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with Zack on LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
              <a
                href="https://bsky.app/profile/zacksigmund.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with Zack on BlueSky"
              >
                <FontAwesomeIcon icon={faBluesky} size="xl" />
              </a>
            </span>
          </p>
        </div>
      </main>
    </div>
  );
}
