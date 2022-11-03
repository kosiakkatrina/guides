import styles from "../../styles/Home.module.scss";
import css from "./styles.module.scss";
import Table from "../Table";

type Post = {
  frontMatter: { date: string; title: string; description: string };
  slug: string;
};

const Guides = ({ posts }: { posts: Post[] }) => {
  const items = posts.map((post) => {
    return {
      date: post.frontMatter.date,
      role: post.frontMatter.title,
      detail: post.frontMatter.description,
      slug: post.slug,
    };
  });

  return (
    <div className={styles.container}>
        <div className={`${styles.grid} ${css.fadein}`}>
          <h1>All guides</h1>
          <p>Here's a list of guides</p>
          <Table items={items} />
        </div>
    </div>
  );
};

export default Guides;
