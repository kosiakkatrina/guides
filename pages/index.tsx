import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Guides from "../Components/Guides";
import Footer from "../Components/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Post = {
  frontMatter: { date: string; title: string; description: string };
  slug: string
};

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>Guides</title>
        <meta name="description" content="technical guides" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Guides posts={posts} />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("guides"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("guides", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};
