import Burger from "@/components/Burger/Burger";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.innerHeader}`}>
        <Link href="/">
          <Image
            src="/kube-logo.png"
            alt="Поиск работы без стресса: как автоотклики экономят время и нервы"
            width={47}
            height={45}
            className={styles.imageLogo}
            quality={100}
          />
        </Link>
        <Burger></Burger>
      </div>
    </header>
  );
}
