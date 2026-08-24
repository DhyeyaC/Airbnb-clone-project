"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import type { Listing } from "@/data/listing";
import styles from "./Reviews.module.css";

interface ReviewsProps {
  listing: Listing;
  reviewsRef?: React.RefObject<HTMLDivElement>;
}

const ratingCategories = [
  { label: "Cleanliness", value: 4.9 },
  { label: "Accuracy", value: 5.0 },
  { label: "Check-in", value: 5.0 },
  { label: "Communication", value: 5.0 },
  { label: "Location", value: 4.8 },
  { label: "Value", value: 4.9 },
];

function RatingBar({ value }: { value: number }) {
  return (
    <div className={styles.ratingBarContainer} aria-hidden="true">
      <div
        className={styles.ratingBar}
        style={{ width: `${(value / 5) * 100}%` }}
      />
    </div>
  );
}

export default function Reviews({ listing, reviewsRef }: ReviewsProps) {
  return (
    <div className={styles.section} ref={reviewsRef} id="reviews">
      {/* Overall rating */}
      <div className={styles.reviewHero}>
        <div className={styles.overallRating}>
          <LaurelBranch className={styles.laurelLeft} />
          <span className={styles.bigRating}>{listing.rating}</span>
          <LaurelBranch className={styles.laurelRight} />
        </div>
        <h2 className={styles.guestFavourite}>Guest favourite</h2>
        <p className={styles.heroDescription}>
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button type="button" className={styles.howReviewsWork}>How reviews work</button>
      </div>

      {/* Rating categories */}
      <div className={styles.categories} aria-label="Rating breakdown">
        {ratingCategories.map((cat) => (
          <div key={cat.label} className={styles.category}>
            <span className={styles.catLabel}>{cat.label}</span>
            <div className={styles.catRight}>
              <RatingBar value={cat.value} />
              <span className={styles.catValue}>{cat.value.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Review cards */}
      <div className={styles.reviewGrid} role="list">
        {listing.reviews.map((review) => (
          <article key={review.id} className={styles.reviewCard} role="listitem">
            <div className={styles.reviewHeader}>
              <Image
                src={review.avatar}
                alt={review.author}
                width={48}
                height={48}
                className={styles.avatar}
              />
              <div>
                <p className={styles.reviewAuthor}>{review.author}</p>
                <p className={styles.reviewMeta}>
                  {review.location && `${review.location} · `}{review.date}
                </p>
              </div>
            </div>
            <div className={styles.reviewStars} aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  fill={i < review.rating ? "currentColor" : "none"}
                  className={styles.reviewStar}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className={styles.reviewText}>{review.text}</p>
          </article>
        ))}
      </div>

      <button className={styles.showAllBtn}>
        Show all {listing.reviewCount} reviews
      </button>
    </div>
  );
}

function LaurelBranch({ className }: { className: string }) {
  return (
    <svg
      className={`${styles.laurel} ${className}`}
      viewBox="0 0 86 132"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="laurelLeaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4b4d50" />
          <stop offset="0.45" stopColor="#242629" />
          <stop offset="1" stopColor="#101112" />
        </linearGradient>
        <filter id="laurelShadow" x="-30%" y="-20%" width="170%" height="170%">
          <feDropShadow dx="2" dy="6" stdDeviation="4" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#laurelShadow)">
        <path d="M52 121 C73 119 78 108 70 96" fill="none" stroke="#202124" strokeWidth="4" strokeLinecap="round" />
        <path d="M69 98 C52 96 39 101 38 111 C49 113 62 109 69 98Z" fill="url(#laurelLeaf)" />
        <path d="M39 94 C24 91 13 83 15 73 C27 73 38 81 39 94Z" fill="url(#laurelLeaf)" />
        <path d="M42 76 C28 72 20 63 23 53 C35 55 42 64 42 76Z" fill="url(#laurelLeaf)" />
        <path d="M48 57 C37 52 32 43 37 34 C47 38 51 47 48 57Z" fill="url(#laurelLeaf)" />
        <path d="M54 37 C47 27 49 15 58 9 C65 19 63 30 54 37Z" fill="url(#laurelLeaf)" />
      </g>
    </svg>
  );
}
