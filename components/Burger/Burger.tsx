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
        <Link href="/posts-ssr" className={styles.link}>
          <span>SSR</span>
        </Link>
        <Link href="/posts-ssg" className={styles.link}>
          <span>SSG</span>
        </Link>
        <Link href="/posts-isr" className={styles.link}>
          <span>ISR</span>
        </Link>
        <Link href="/posts-csr" className={styles.link}>
          <span>CSR</span>
        </Link>
      </nav>
    </div>
  );
}

// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import styles from "./index.module.scss";

// export default function Burger() {
//   const [isOpen, setIsOpen] = useState(false);
//   const burgerRef = useRef<HTMLDivElement | null>(null);
//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         burgerRef.current &&
//         !burgerRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <div className={styles.burgerWrapper} ref={burgerRef}>
//       <div
//         className={`${styles.overlay} ${isOpen ? styles.active : ""}`}
//         onClick={closeMenu}
//       />
//       <div
//         className={`${styles.burgerButton} ${isOpen ? styles.active : ""}`}
//         onClick={toggleMenu}
//       >
//         <div className={`${styles.bar} ${styles.bar1}`}></div>
//         <div className={`${styles.bar} ${styles.bar2}`}></div>
//         <div className={`${styles.bar} ${styles.bar3}`}></div>
//       </div>

//       <nav className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
//         <Link href="/posts-ssr" className={styles.link}>
//           SSR
//         </Link>
//         <Link href="/posts-ssg" className={styles.link}>
//           SSG
//         </Link>
//         <Link href="/posts-isr" className={styles.link}>
//           ISR
//         </Link>
//         <Link href="/posts-csr" className={styles.link}>
//           CSR
//         </Link>
//       </nav>
//     </div>
//   );
// }
