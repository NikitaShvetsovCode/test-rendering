import styles from "./index.module.scss";

async function getPost(id: string) {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${id}`, {
      next: { revalidate: 86400 }, // 86400 секунд = 24 часа, обновление раз в сутки
    });
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function PostISR({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) return <div>Ошибка загрузки поста</div>;

  return (
    <div className={`container ${styles.postPage}`}>
      <h1 className={styles.title}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
