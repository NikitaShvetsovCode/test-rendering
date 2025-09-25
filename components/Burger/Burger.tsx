"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.burgerWrapper}>
      <div
        className={`${styles.burgerButton} ${isOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <div className={`${styles.bar} ${styles.bar1}`}></div>
        <div className={`${styles.bar} ${styles.bar2}`}></div>
        <div className={`${styles.bar} ${styles.bar3}`}></div>
      </div>

      <nav className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
        <Link href="/" className={styles.link}>
          Главная
        </Link>
      </nav>
    </div>
  );
}
