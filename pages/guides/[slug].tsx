import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import styles from "../../styles/Home.module.scss";
import css from "./styles.module.scss";
import Image from 'next/image'

const PostPage = ({
  frontMatter: { title },
  mdxSource,
}: {
  frontMatter: { title: string };
  mdxSource: any;
}) => {
  return (
    <div className={`${styles.grid} ${css.fadein}`}>
      <h1>{title}</h1>
      <MDXRemote {...mdxSource} components={{ Image }} />
    </div>
  );
};
export default PostPage;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("guides"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("guides", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
