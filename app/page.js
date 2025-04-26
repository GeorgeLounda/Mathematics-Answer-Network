import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import styles from "./page.module.css";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <NavBar />
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
}
