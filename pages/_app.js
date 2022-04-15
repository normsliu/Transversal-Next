import "../styles/globals.css";
import Layout from "../components/Layout";
import styles from "../styles/layout.module.css"

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}> 
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  );
}

export default MyApp;
