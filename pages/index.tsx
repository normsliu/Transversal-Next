import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Demo from "../components/Demo";
import Authors from "../components/Authors";
import React from "react";


export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>TransversaL | Home</title>
        <meta name="keywords" content="transversaL" />
      </Head>

      <Hero />
      <Demo/>
      <Authors/>
    </>
  );
}
