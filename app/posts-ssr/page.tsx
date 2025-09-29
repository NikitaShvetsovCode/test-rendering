import Link from "next/link";
import styles from "./index.module.scss";

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch("https://dummyjson.com/posts", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    return data.posts;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function PostsSSR() {
  const posts = await getPosts();

  return (
    <div className={`container ${styles.posts}`}>
      <h1>SSR — Server-Side Rendering</h1>
      <ul className={styles.postsContainer}>
        {posts.slice(0, 20).map((post: any) => (
          <li key={post.id} className={styles.post}>
            <div className={styles.title}>{post.title}</div>
            <Link href={`/posts-ssr/${post.id}`} className={styles.moreButton}>
              Подробнее
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
