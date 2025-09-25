import Burger from "@/components/Burger/Burger";
import styles from "./index.module.scss";

export default function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <Burger></Burger>
    </header>
  );
}
