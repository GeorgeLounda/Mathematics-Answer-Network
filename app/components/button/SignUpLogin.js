import Link from "next/link";
import styles from "./SignUpLogin.module.css";

export default function SignUpLogin({ children }) {
  return (
    <Link href="">
      <button className={styles.btn}>{children}</button>
    </Link>
  );
}
