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
        <span style={{ color: "rgb(114, 115, 115)" }}>a</span>
        <span style={{ color: "teal" }}>L</span>
      </h1>

      <p className={styles.description}>
        Visualize your data, auto-generate schemas, and explore the
        possibilities of GraphlQL
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>VISUALIZE &rarr;</h2>
          <p>
            Utilize our interactive dashboard to visualize real-time responses
            with dynamic data visualization of metrics.
          </p>
        </div>

        <div className={styles.card}>
          <h2>GENERATE &rarr;</h2>
          <p>
            Auto-generate GraphQL schemas, queries, and mutations tailored to
            your specific needs.
          </p>
        </div>

        <div className={styles.card}>
          <h2>EXPLORE &rarr;</h2>
          <p>
            Explore the endless possibilities of GraphQL by utilizing Transversal.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
