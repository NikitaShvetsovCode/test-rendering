import { Nunito_Sans } from "next/font/google";
import styles from "./index.module.scss";
import { useState } from "react";
import { toast } from "react-toastify";

const nunitoSans = Nunito_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["cyrillic"],
  variable: "--nunitoSans",
});

export default function ModalMain() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [, setErrorName] = useState("");
  const [, setSuccess] = useState(false); // для имитации успешной отправки

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleContinue = async () => {
    setErrorName("");

    const formData = new FormData();
    formData.append("name", name);

    let hasError = false;

    if (imageFile) {
      formData.append("image", imageFile);
    }

    if (!name.trim()) {
      setErrorName("Имя обязательно для заполнения");
      hasError = true;

      toast.error("Имя обязательно для заполнения", {
        position: "top-center",
        autoClose: 2000,
      });
    }

    if (hasError) return;

    try {
      // Имитация POST запроса
      await new Promise((resolve) => setTimeout(resolve, 500));

      setSuccess(true);
      toast.success("Данные успешно отправлены!", {
        position: "top-center",
        autoClose: 2000,
      });

      // сброс формы
      setName("");
      setImageFile(null);
      setImagePreview(null);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Неизвестная ошибка";

      toast.error(`Ошибка: ${errorMessage}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className={`${styles.modalMain} ${nunitoSans.variable}`}>
      <label className={styles.avatarWrapper}>
        {imagePreview ? (
          <img src={imagePreview} alt="image" className={styles.avatarImage} />
        ) : (
          <div className={styles.avatarPlaceholder}>+</div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.avatarInput}
          id="image-upload"
        />
      </label>

      <label htmlFor="image-upload" className={styles.avatarText}>
        Добавить фото
      </label>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите имя"
        className={styles.nameInput}
      />

      <div className={styles.continue} onClick={handleContinue}>
        Отправить
      </div>
    </div>
  );
}
