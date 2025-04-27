"use client";
import { useState } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import StartBtn from "./components/button/StartBtn";
import About from "./components/About";
import Link from "next/link";
import PlanIcon from "./components/icon/PlanIcon";
import QuestionBankIcon from "./components/icon/QuestionBankIcon-";
import StudyGuidesIcon from "./components/icon/StudyGuidesIcon";

export default function page() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.container}>
      <NavBar isActive={isActive} onIsActive={setIsActive} />
      {isActive ? (
        <>
          <div className={styles["menu-box"]}>
            <h1 className={styles.h1}>Students</h1>
            <div className={styles.option}>
              <Link href="" className={styles.link}>
                <PlanIcon />
                <button className={styles.btn}>Question Bank</button>
              </Link>
              <Link href="" className={styles.link}>
                <QuestionBankIcon />
                <button className={styles.btn}>My Plan</button>
              </Link>
              <Link href="" className={styles.link}>
                <StudyGuidesIcon />
                <button className={styles.btn}>Study Guides</button>
              </Link>
            </div>
          </div>
          <div className={styles.overlay} onClick={() => setIsActive((isActive) => !isActive)}></div>
        </>
      ) : (
        ""
      )}
      <div className={styles.content}>
        <HeroSection />
        <StartBtn>Start answering</StartBtn>
        <About />
      </div>
      <Footer />
    </div>
  );
}
