"use client";

import { Share, Heart, Star, ChevronRight } from "lucide-react";
import type { Listing } from "@/data/listing";
import styles from "./PropertyInfo.module.css";

interface PropertyTitleProps {
  listing: Listing;
}

export default function PropertyTitle({ listing }: PropertyTitleProps) {
  return (
    <div className={styles.titleRow}>
      <h1 className={styles.title}>{listing.title}</h1>
      <div className={styles.actions}>
        <button className={styles.actionBtn} aria-label="Share this listing">
          <Share size={16} strokeWidth={2} aria-hidden="true" />
          <span>Share</span>
        </button>
        <button className={styles.actionBtn} aria-label="Save this listing to your wishlist">
          <Heart size={16} strokeWidth={2} aria-hidden="true" />
          <span>Save</span>
        </button>
      </div>
    </div>
  );
}

interface PropertyMetaProps {
  listing: Listing;
  onShowReviews?: () => void;
}

export function PropertyMeta({ listing, onShowReviews }: PropertyMetaProps) {
  return (
    <div className={styles.meta}>
      <div className={styles.metaLeft}>
        <span className={styles.ratingRow} aria-label={`Rated ${listing.rating} out of 5`}>
          <Star size={14} className={styles.starIcon} fill="currentColor" aria-hidden="true" />
          <strong>{listing.rating}</strong>
        </span>
        <span className={styles.dot} aria-hidden="true">·</span>
        <button
          className={styles.reviewsLink}
          onClick={onShowReviews}
          aria-label={`View all ${listing.reviewCount} reviews`}
        >
          {listing.reviewCount} reviews
        </button>
        {listing.host.isSuperhost && (
          <>
            <span className={styles.dot} aria-hidden="true">·</span>
            <span className={styles.badge} aria-label="Superhost">
              🏆 Superhost
            </span>
          </>
        )}
        <span className={styles.dot} aria-hidden="true">·</span>
        <a
          href="#location"
          className={styles.locationLink}
          aria-label={`Location: ${listing.location.neighborhood}, ${listing.location.city}, ${listing.location.state}, ${listing.location.country}`}
        >
          {listing.location.neighborhood}, {listing.location.city}, {listing.location.country}
        </a>
      </div>
    </div>
  );
}

interface PropertyDetailsProps {
  listing: Listing;
}

export function PropertyDetails({ listing }: PropertyDetailsProps) {
  return (
    <div className={styles.details}>
      <h2 className={styles.detailsTitle}>
        {listing.type} hosted by {listing.host.name}
      </h2>
      <div className={styles.detailsList} aria-label="Property details">
        <span>{listing.guests} guest{listing.guests !== 1 ? "s" : ""}</span>
        <span className={styles.dot} aria-hidden="true">·</span>
        <span>{listing.bedrooms} bedroom</span>
        <span className={styles.dot} aria-hidden="true">·</span>
        <span>{listing.beds} bed</span>
        <span className={styles.dot} aria-hidden="true">·</span>
        <span>{listing.bathrooms} bath</span>
      </div>
    </div>
  );
}
