"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  const burgerRef = useRef<HTMLDivElement | null>(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.burgerWrapper} ref={burgerRef}>
      <div
        className={`${styles.overlay} ${isOpen ? styles.active : ""}`}
        onClick={closeMenu}
      />
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

        <Link href="/" className={styles.link}>
          Главная
        </Link>
      </nav>
    </div>
  );
}
