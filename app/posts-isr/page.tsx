import Link from "next/link";
import styles from "./index.module.scss";

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch("https://dummyjson.com/posts", {
      next: { revalidate: 86400 }, // 86400 секунд = 24 часа, обновление раз в сутки
    });
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    return data.posts;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function PostsISR() {
  const posts = await getPosts();

  return (
    <div className={`container ${styles.posts}`}>
      <h1 className={styles.h1}>ISR — Incremental Static Regeneration</h1>
      <ul className={styles.postsContainer}>
        {posts.slice(0, 20).map((post: Post) => (
          <li key={post.id} className={styles.post}>
            <div className={styles.title}>{post.title}</div>
            <Link href={`/posts-isr/${post.id}`} className={styles.moreButton}>
              Подробнее
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
