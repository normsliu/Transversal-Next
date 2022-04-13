import React from "react";
import styles from "../styles/authors.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Authors = () => {
  return (
    <section>
      <h2 className={styles.title}>TransversaL Team</h2>
      <div className={styles.container}>
        <div className={styles.author_container}>
          <div className={styles.picture}>
            <Image src="/han.jpg" width={175} height={175} />
          </div>
          <div>Han Kim</div>
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
          </div>
        </div>
        <div className={styles.author_container}>
          <div className={styles.picture}>
            <Image src="/dan.jpg" width={175} height={175}  />
          </div>
          <div>Daniel Forrester</div>
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
            </a>
          </div>
        </div>
        <div className={styles.author_container}>
          <div className={styles.picture}>
            <Image src="/norm.jpg" width={175} height={175} />
          </div>
          <div>Norman Lui</div>
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
            </a>
          </div>
        </div>
        <div className={styles.author_container}>
          <div className={styles.picture}>
            <Image src="/kevin.jpg" width={175} height={175} />
          </div>
          <div>Kevin Mun</div>
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
      </div>
    </section>
  );
};

export default Authors;
