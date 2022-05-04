import React from "react";
import styles from "../styles/hero.module.css";
import { ImSpinner10, ImEqualizer, ImIcoMoon } from "react-icons/im";

const Hero = (): JSX.Element => {
  const upperCase = { color: "teal" };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <span style={upperCase}>T</span>
        <span className={styles.gradient_text}>r</span>
        <span className={styles.gradient_text}>a</span>
        <span className={styles.gradient_text}>n</span>
        <span className={styles.gradient_text}>s</span>
        <span className={styles.gradient_text}>v</span>
        <span className={styles.gradient_text}>e</span>
        <span className={styles.gradient_text}>r</span>
        <span className={styles.gradient_text}>s</span>
        <span className={styles.gradient_text}>a</span>
        <span style={upperCase}>L</span>
      </h1>

      <p className={styles.description}>
        Visualize your data, auto-generate schemas, and explore the
        possibilities of GraphQL
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>
            {" "}
            <ImSpinner10 /> VISUALIZE{" "}
          </h2>
          <p>
            Utilize our interactive dashboard to visualize real-time responses
            with dynamic data visualization of metrics.
          </p>
        </div>

        <div className={styles.card}>
          <h2>
            {" "}
            <ImEqualizer /> GENERATE{" "}
          </h2>
          <p>
            Auto-generate GraphQL schemas, queries, and mutations tailored to
            your specific needs.
          </p>
        </div>

        <div className={styles.card}>
          <h2>
            <ImIcoMoon /> EXPLORE{" "}
          </h2>
          <p>
            Explore the endless possibilities of GraphQL by utilizing
            Transversal.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
