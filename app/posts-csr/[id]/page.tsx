"use client";

import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useParams } from "next/navigation";

type Post = { id: number; title: string; body: string };

export default function PostCSR() {
  const params = useParams();
  const id = params?.id;

  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getPost() {
      try {
        const res = await fetch(`/api/posts/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error(err);
        setError("Ошибка загрузки поста");
      }
    }
    getPost();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!post) return <div></div>;

  return (
    <div className={`container ${styles.postPage}`}>
      <h1 className={styles.title}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
