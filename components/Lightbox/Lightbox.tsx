"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Share, Heart } from "lucide-react";
import type { Image as ImageType } from "@/data/listing";
import styles from "./Lightbox.module.css";
import { useLockScroll } from "@/hooks/useLockScroll";
import { useKeyboard } from "@/hooks/useKeyboard";

interface LightboxProps {
  images: ImageType[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useLockScroll(isOpen);

  useKeyboard(
    [
      { key: "Escape", handler: onClose },
      { key: "ArrowLeft", handler: onPrev },
      { key: "ArrowRight", handler: onNext },
    ],
    isOpen
  );

  // Focus management
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      setTimeout(() => closeRef.current?.focus(), 50);
    } else {
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const modal = document.getElementById("lightbox-modal");
      if (!modal) return;
      const focusable = modal.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  if (!isOpen) return null;

  const current = images[currentIndex];
  const total = images.length;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${currentIndex + 1} of ${total}: ${current?.alt}`}
      id="lightbox-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top bar */}
      <div className={styles.topBar}>
        <span className={styles.counter} aria-live="polite" aria-atomic="true">
          {currentIndex + 1} / {total}
        </span>
        <div className={styles.topActions}>
          <button className={styles.topActionBtn} aria-label="Share photo">
            <Share size={18} aria-hidden="true" />
            <span>Share</span>
          </button>
          <button className={styles.topActionBtn} aria-label="Save photo">
            <Heart size={18} aria-hidden="true" />
            <span>Save</span>
          </button>
          <button
            ref={closeRef}
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close photo viewer"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Main image area */}
      <div className={styles.imageArea} aria-live="polite">
        {/* Previous button */}
        <button
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={onPrev}
          aria-label={`Previous photo (${currentIndex > 0 ? currentIndex : total} of ${total})`}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={20} strokeWidth={2.5} aria-hidden="true" />
        </button>

        {/* Image */}
        <div className={styles.imageContainer}>
          {current && (
            <Image
              key={current.id}
              src={current.url}
              alt={current.alt}
              fill
              sizes="90vw"
              className={styles.img}
              style={{ objectFit: "contain" }}
              priority
            />
          )}
        </div>

        {/* Next button */}
        <button
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={onNext}
          aria-label={`Next photo (${currentIndex < total - 1 ? currentIndex + 2 : 1} of ${total})`}
          disabled={currentIndex === total - 1}
        >
          <ChevronRight size={20} strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>

      {/* Caption */}
      {current && (
        <div className={styles.caption}>
          <p className={styles.captionText}>{current.alt}</p>
          <p className={styles.captionRoom}>{current.room}</p>
        </div>
      )}
    </div>
  );
}
