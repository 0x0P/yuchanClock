"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { useStatus } from "../context/statusContext";

export default function Home() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US"));
  const { status, setStatus } = useStatus();

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      setTime(currentTime.toLocaleTimeString("en-US"));
      
      const currentHour = currentTime.getHours();
      const currentMinutes = currentTime.getMinutes();

      if (currentHour === 6 && currentMinutes < 3) {
        setStatus(true);
      } else {
        setStatus(false);
      }

      const nextUpdate = 1000 - currentTime.getMilliseconds();
      setTimeout(updateTime, nextUpdate);
    };

    updateTime(); 

    const timeoutId = setTimeout(updateTime);
    return () => clearTimeout(timeoutId);
  }, [setStatus]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{time}</h1>
        <span>
          유찬이 : <strong>{status ? "☀️" : "💤"}</strong>
        </span>
      </main>
    </div>
  );
}
