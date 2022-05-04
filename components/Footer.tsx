import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImFileText2 } from "react-icons/im";
import styles from "../styles/footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_logo}>TransversaL © 2022</div>

      <div className={styles.social_icons}>
        <a
          href="https://github.com/oslabs-beta/transversal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/company/transversalql/about/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.linkedin.com/company/transversalql/about/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImFileText2 />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
