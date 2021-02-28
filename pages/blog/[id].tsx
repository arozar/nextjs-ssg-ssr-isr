import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import prisma from "../../src/primsa";
export default function Blog({ post }) {
  return <main></main>;
}

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const post = await prisma.post.findMany({
    where: {
      published: true,
    },
  });
  return {
    paths: [
      { params: {} }, // See the "paths" section below
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
  });
  return {
    props: post,
  };
};

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
