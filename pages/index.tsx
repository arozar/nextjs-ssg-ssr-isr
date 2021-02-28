import { GetServerSideProps } from "next";
import Head from "next/head";
import prisma from "../src/primsa";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to this demo!</h1>

      <div className={styles.grid}>
        <a href="/isr" className={styles.card}>
          <h3>ISR &rarr;</h3>
          <p>Fetches a random public API every revalidation period</p>
        </a>

        <a href="/ssg" className={styles.card}>
          <h3>SSG &rarr;</h3>
          <p>Fetches a random public API at build time</p>
        </a>

        <a href="/ssr" className={styles.card}>
          <h3>SSR &rarr;</h3>
          <p>Fetches a random public API on every request</p>
        </a>
      </div>
    </main>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
  });
  return {
    props: post,
  };
};
