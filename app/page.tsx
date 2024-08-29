"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US"));
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{time}</h1>
      </main>
      <footer className={styles.footer}>
        <span>유찬이 : {status ? "☀️" : "💤"}</span>
      </footer>
    </div>
  );
}
