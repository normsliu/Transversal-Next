import React from "react";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <span style={{ color: "teal" }}>T</span>
        <span style={{ color: "rgb(114, 115, 115)" }}>r</span>
        <span style={{ color: "rgb(114, 115, 115)" }}>a</span>
        <span style={{ color: "rgb(114, 115, 115)" }}>n</span>
        <span style={{ color: "rgb(114, 115, 115)" }}>s</span>
        <span style={{ color: "rgb(114, 115, 115)" }}>v</span>
        <span style={{ color: "rgb(114, 115, 115)" }}>e</span>
        <span style={{ color: "rgb(114, 115, 115)" }}>r</span>
        <span style={{ color: "rgb(114, 115, 115)" }}>s</span>
        <span style={{color:'rgb(114, 115, 115)'}}>a</span>
        <span style={{ color: "teal" }}>L</span>
      </h1>

      <p className={styles.description}>
        Visualize your data, auto-generate schemas, and explore the
        possibilities of GraphlQL
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>
      </div>
    </main>
  );
};

export default Hero;
