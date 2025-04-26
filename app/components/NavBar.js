import LogoApple from "./icon/LogoApple";
import MenuIcon from "./icon/MenuIcon";
import SignUpLogin from "./button/SignUpLogin";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarcomponent}>
        <MenuIcon />
        <LogoApple />
      </div>
      <div className={styles.navbarcomponent}>
        <SignUpLogin>Sign up</SignUpLogin>
        <SignUpLogin>Log in</SignUpLogin>
      </div>
    </nav>
  );
}
