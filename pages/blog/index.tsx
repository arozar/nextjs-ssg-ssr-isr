import { GetStaticProps } from "next";
import Head from "next/head";
import prisma from "../../src/primsa";
export default function Blog({ feed }) {
  return (
    <main>
      <h1>This is an example in Incremental static regeneration</h1>
      <p>
        When the revalidate prop is set to a number then the page will
        regenerate
      </p>
      <p>
        Whether or not this happens depends on the whether the number of seconds
        since the page was rendered is greater than the revalidate property
      </p>
    </main>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
  });
  return { props: { feed }, revalidate: 10 };
};
