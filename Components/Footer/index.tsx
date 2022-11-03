import css from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className={css.footer}>
    <a
      href="mailto:<info@kosiak.co.uk>"
      className={css.iconlink}
      aria-label="Send email"
    >
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
    <a
      href="https://github.com/kosiakkatrina"
      target="_blank"
      rel="noreferrer"
      className={css.iconlink}
      aria-label="Open github"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a
      href="https://www.linkedin.com/in/katrinakosiak/"
      target="_blank"
      rel="noreferrer"
      className={css.iconlink}
      aria-label="Open linkedin"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </footer>
);

export default Footer;
