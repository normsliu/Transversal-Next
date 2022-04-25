import React from "react";
import styles from "../styles/demo.module.css";
import Image from "next/image";

const Demo = ({ title, imgStart, snippet, blurb }) => {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h2>Demo</h2>
        <p>
          blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
          blurb
        </p>
      </div>
      <div className={styles.card_img}>
        <Image
          src="/../public/artql.gif"
          alt="demo_img"
          height={450}
          width={550}
        />
        
      </div>
      
    </main>
  );
};

export default Demo;
