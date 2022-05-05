import React from "react";
import styles from "../styles/demo.module.css";
import Image from "next/image";

// interface DemoProps {
//   title: String;
//   imgStart: String;
//   snippet: String;
//   blurb: String;
// }

const Demo = (): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.row}> 
        <div className={styles.cardLeft}>
        <h3>Speed up your GraphQL's setup</h3>
          <h1>Transversal can speed up GraphQL's query, schema, and mutation implementation by auto generating it for your application.</h1>
        </div>
        <div className={styles.card_img}>
        <Image
        src="/../public/artql.gif"
        alt="demo_img"
        height={450}
        width={550}
         />
        </div>
      </section>
      <section className={styles.row}>

        <div className={styles.card_img}>
        <Image
        src="/../public/artql.gif"
        alt="demo_img"
        height={450}
        width={550}
         />
        </div>
        <div className={styles.cardRight}>
        <h3>Speed up your GraphQL's setup</h3>
          <h1>Transversal can speed up GraphQL's query, schema, and mutation implementation by auto generating it for your application.</h1>
        </div>
      </section >
      <section className={styles.row}>
      <div className={styles.cardLeft}>
        <h3>Speed up your GraphQL's setup</h3>
          <h1>Transversal can speed up GraphQL's query, schema, and mutation implementation by auto generating it for your application.</h1>
        </div>
        <div className={styles.card_img}>
        <Image
        src="/../public/artql.gif"
        alt="demo_img"
        height={450}
        width={550}
         />
        </div>
      </section >
    </div>
  );

 
};


export default Demo;
