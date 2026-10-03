"use client";

import { useEffect } from "react";

// Casual copy protection: blocks right-click, copying, dragging images and the usual
// "view source / DevTools / save page" shortcuts. This deters ordinary visitors only —
// anything a browser displays can still be captured by a determined user.
const BLOCKED_KEYS = [
  e => e.key === "F12",
  e => (e.ctrlKey || e.metaKey) && e.shiftKey && ["i", "j", "c", "k"].includes(e.key.toLowerCase()), // DevTools
  e => (e.ctrlKey || e.metaKey) && e.altKey && ["i", "j", "c", "u"].includes(e.key.toLowerCase()),   // DevTools (macOS)
  e => (e.ctrlKey || e.metaKey) && ["u", "s", "p"].includes(e.key.toLowerCase()),                    // source, save, print
];

const isEditable = el => el && (el.closest("input, textarea, [contenteditable='true']"));

export default function SiteProtection() {
  useEffect(() => {
    const stop = e => { if (!isEditable(e.target)) e.preventDefault(); };
    const onKey = e => { if (BLOCKED_KEYS.some(test => test(e))) { e.preventDefault(); e.stopPropagation(); } };
    const onDrag = e => { if (e.target.closest && e.target.closest("img, video, a")) e.preventDefault(); };

    document.addEventListener("contextmenu", stop);
    document.addEventListener("copy", stop);
    document.addEventListener("cut", stop);
    document.addEventListener("selectstart", stop);
    document.addEventListener("dragstart", onDrag);
    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("contextmenu", stop);
      document.removeEventListener("copy", stop);
      document.removeEventListener("cut", stop);
      document.removeEventListener("selectstart", stop);
      document.removeEventListener("dragstart", onDrag);
      document.removeEventListener("keydown", onKey, true);
    };
  }, []);

  return null;
}
