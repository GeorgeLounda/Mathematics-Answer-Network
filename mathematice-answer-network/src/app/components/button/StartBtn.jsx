import Link from "next/link";
import styles from "./StartBtn.module.css";

export default function StartBtn({ children }) {
  return (
    <Link href="/StartAnswering">
      <button className={styles.btn}>{children}</button>
    </Link>
  );
}
