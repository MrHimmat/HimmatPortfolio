"use client";

import React, { useEffect, useState } from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const addCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setCursorActive(true);
    const handleMouseUp = () => setCursorActive(false);

    window.addEventListener("mousemove", addCursorPosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", addCursorPosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`${styles.cursor} ${cursorActive ? styles.active : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CustomCursor;
