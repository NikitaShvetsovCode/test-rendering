import styles from "./index.module.scss";

async function getPost(id: string) {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${id}`, {
      cache: "force-cache", // Данные кэшируются на build
    });
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function PostSSG({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) return <div>Ошибка загрузки поста</div>;

  return (
    <div className={`container ${styles.postPage}`}>
      <h1 className={styles.title}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
