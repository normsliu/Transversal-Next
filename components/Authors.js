import React from "react";
import styles from "../styles/authors.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Authors = () => {
  return (
    <section>
        <h2 className={styles.title}>TransversaL Team</h2>
      <div className={styles.container}>
        <div className={styles.author_container}>
          <div>PIC</div>
          <div className={styles.social_icons}>
            Han
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
          </div>
        </div>
        <div className={styles.author_container}>
          <div>PIC</div>
          <div className={styles.social_icons}>
            Dan
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
            </a>
          </div>
        </div>
        <div className={styles.author_container}>
          <div>PIC</div>
          <div className={styles.social_icons}>
            Norman
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
            </a>
          </div>
        </div>
        <div className={styles.author_container}>
          <div>PIC</div>
          <div className={styles.social_icons}>
            Kevin
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
      </div>
    </section>
  );
};

export default Authors;
