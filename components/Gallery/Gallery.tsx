"use client";

import Image from "next/image";
import { Grid2X2 } from "lucide-react";
import type { Image as ImageType } from "@/data/listing";
import styles from "./Gallery.module.css";

interface GalleryProps {
  images: ImageType[];
  onOpenPhotoTour: (index: number) => void;
}

export default function Gallery({ images, onOpenPhotoTour }: GalleryProps) {
  const displayImages = images.slice(0, 5);

  return (
    <section className={styles.gallery} aria-label="Property photo gallery">
      <div className={styles.grid}>
        {/* Main large image */}
        <button
          className={`${styles.imageCell} ${styles.mainImage}`}
          onClick={() => onOpenPhotoTour(0)}
          aria-label={`View photo: ${displayImages[0]?.alt}`}
        >
          {displayImages[0] && (
            <Image
              src={displayImages[0].url}
              alt={displayImages[0].alt}
              fill
              priority
              sizes="(max-width: 1120px) 50vw, 560px"
              className={styles.img}
              style={{ objectFit: "cover" }}
            />
          )}
        </button>

        {/* 2x2 grid of smaller images */}
        <div className={styles.subGrid} role="list">
          {displayImages.slice(1, 5).map((image, index) => (
            <button
              key={image.id}
              className={`${styles.imageCell} ${
                index === 1 ? styles.topRight : ""
              } ${index === 3 ? styles.bottomRight : ""}`}
              onClick={() => onOpenPhotoTour(index + 1)}
              aria-label={`View photo: ${image.alt}`}
              role="listitem"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="(max-width: 1120px) 25vw, 280px"
                className={styles.img}
                style={{ objectFit: "cover" }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Show all photos button */}
      <button
        className={styles.showAllBtn}
        onClick={() => onOpenPhotoTour(0)}
        aria-label={`Show all ${images.length} photos`}
        id="show-all-photos"
      >
        <Grid2X2 size={16} strokeWidth={2} aria-hidden="true" />
        <span>Show all photos</span>
      </button>
    </section>
  );
}
