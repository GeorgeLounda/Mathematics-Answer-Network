"use client";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import StartBtn from "./components/button/StartBtn";
import About from "./components/About";
// import Bar from "./components/Bar";
import { useState } from "react";

export default function page() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.container}>
      {/* {isActive ? <Bar onIsActive={setIsActive} /> : <NavBar isActive={isActive} onIsActive={setIsActive} />} */}
      <NavBar isActive={isActive} onIsActive={setIsActive} />
      <div className={styles.content}>
        <HeroSection />
        <StartBtn>Start answering</StartBtn>
        <About />
      </div>
      <Footer />
    </div>
  );
}
