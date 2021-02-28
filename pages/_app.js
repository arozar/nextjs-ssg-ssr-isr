import "../styles/globals.css";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js ISR Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
