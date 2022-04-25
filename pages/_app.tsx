import { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../components/Layout";
import styles from "../styles/layout.module.css";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
