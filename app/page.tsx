"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./page.module.scss";
import stylesModal from "@/components/Modal/index.module.scss";
import Modal from "react-modal";
import { useState } from "react";
import ModalMain from "@/components/Modal/ModalMain";

export default function Home() {
  const [modalOpen, setIsModalOpen] = useState<boolean>(false);

  const links = [
    {
      href: "/posts-ssr",
      label: "SSR — Server-Side Rendering (Серверный рендеринг)",
    },
    {
      href: "/posts-ssg",
      label: "SSG — Static Site Generation (Статическая генерация)",
    },
    {
      href: "/posts-isr",
      label:
        "ISR — Incremental Static Regeneration (Инкрементальная статическая регенерация)",
    },
    {
      href: "/posts-csr",
      label: "CSR — Client-Side Rendering (Клиентский рендеринг)",
    },
  ];

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <nav>
      <div className={styles.container}>
        <h1 className={styles.h1}>Виды рендеринга</h1>
        <ul className={styles.menu}>
          {links.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={styles.menuItem}
            >
              <div className={styles.label}>{link.label}</div>
              <Link href={link.href} className={styles.button}>
                Подробнее
              </Link>
            </motion.li>
          ))}
        </ul>
        <h2 className={styles.h2}>Модальное окно</h2>
        <div
          className={styles.button}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Открыть
        </div>

        <Modal
          className={stylesModal.modal}
          overlayClassName={stylesModal.overlayModal}
          isOpen={modalOpen}
          onRequestClose={closeModal}
          closeTimeoutMS={200}
          ariaHideApp={false}
        >
          {modalOpen && <ModalMain />}
        </Modal>
      </div>
    </nav>
  );
}
