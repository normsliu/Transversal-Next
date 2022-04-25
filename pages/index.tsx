import Head from "next/head";
//import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Demo from "../components/Demo";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>TransversaL | Home</title>
        <meta name="keywords" content="transversaL" />
      </Head>

      <Hero />
      <Demo
        title={undefined}
        imgStart={undefined}
        snippet={undefined}
        blurb={undefined}
      />
    </>
  );
}