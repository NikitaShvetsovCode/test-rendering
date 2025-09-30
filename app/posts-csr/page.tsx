"use client";

import Link from "next/link";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";

export default function PostsCSR() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPosts(data.posts);
      } catch (err) {
        console.error(err);
        setError("Ошибка загрузки постов");
      }
    }
    getPosts();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className={`container ${styles.posts}`}>
      <h1 className={styles.h1}>CSR — Client-Side Rendering</h1>
      <ul className={styles.postsContainer}>
        {posts.slice(0, 20).map((post: Post) => (
          <li key={post.id} className={styles.post}>
            <div className={styles.title}>{post.title}</div>
            <Link href={`/posts-csr/${post.id}`} className={styles.moreButton}>
              Подробнее
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
