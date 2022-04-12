import React from "react";
import styles from "../styles/authors.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Authors = () => {
  return (
    <section>
      <div>
        <h2 className={styles.title}>TransversaL Team</h2>
      </div>
      <div className={styles.container}>
        <div>
          <div className={styles.social_icons}>
            <a
              href="https://github.com/han900204"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/han900204/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            Han
          </div>
        </div>
        <div className={styles.social_icons}>
          <a
            href="https://github.com/daniel-forrester"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/danielforrester/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            Dan
          </a>
        </div>
        <div className={styles.social_icons}>
          <a
            href="https://github.com/normsliu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/norm-liu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            Norman
          </a>
        </div>
        <div className={styles.social_icons}>
          <a
            href="https://github.com/kmun94"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-mun-27070b231"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Authors;
