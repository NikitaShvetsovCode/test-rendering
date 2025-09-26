import Burger from "@/components/Burger/Burger";
import styles from "./index.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.innerHeader}`}>
        <>123</>
        <Burger></Burger>
      </div>
    </header>
  );
}
