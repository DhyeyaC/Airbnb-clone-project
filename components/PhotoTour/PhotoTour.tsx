"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, Share, Heart, ChevronLeft } from "lucide-react";
import type { Image as ImageType } from "@/data/listing";
import styles from "./PhotoTour.module.css";
import { useLockScroll } from "@/hooks/useLockScroll";
import { useKeyboard } from "@/hooks/useKeyboard";

interface PhotoTourProps {
  images: ImageType[];
  isOpen: boolean;
  onClose: () => void;
  onOpenLightbox: (index: number) => void;
  initialIndex?: number;
}

// Group images by room
function groupByRoom(images: ImageType[]) {
  const groups: Record<string, ImageType[]> = {};
  for (const image of images) {
    if (!groups[image.room]) {
      groups[image.room] = [];
    }
    groups[image.room].push(image);
  }
  return groups;
}

export default function PhotoTour({
  images,
  isOpen,
  onClose,
  onOpenLightbox,
}: PhotoTourProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useLockScroll(isOpen);

  useKeyboard([{ key: "Escape", handler: onClose }], isOpen);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      setTimeout(() => closeRef.current?.focus(), 50);
    } else {
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  const grouped = groupByRoom(images);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      id="photo-tour-modal"
    >
      {/* Sticky header */}
      <div className={styles.header}>
        <button
          ref={closeRef}
          className={styles.backBtn}
          onClick={onClose}
          aria-label="Close photo tour"
        >
          <ChevronLeft size={20} aria-hidden="true" />
          <span>Back to listing</span>
        </button>
        <div className={styles.headerActions}>
          <button className={styles.headerActionBtn} aria-label="Share listing">
            <Share size={16} aria-hidden="true" />
            <span>Share</span>
          </button>
          <button className={styles.headerActionBtn} aria-label="Save to wishlist">
            <Heart size={16} aria-hidden="true" />
            <span>Save</span>
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <main className={styles.content}>
        {Object.entries(grouped).map(([room, roomImages]) => (
          <section key={room} className={styles.roomSection}>
            <h2 className={styles.roomHeading}>{room}</h2>
            <div className={styles.imagesGrid}>
              {roomImages.map((image, i) => {
                const globalIndex = images.findIndex((img) => img.id === image.id);
                const isLarge = i === 0;
                return (
                  <button
                    key={image.id}
                    className={`${styles.imageBtn} ${isLarge ? styles.imageLarge : styles.imageSmall}`}
                    onClick={() => onOpenLightbox(globalIndex)}
                    aria-label={`Open full screen: ${image.alt}`}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 800px) 100vw, 800px"
                      className={styles.img}
                      style={{ objectFit: "cover" }}
                    />
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
