"use client";

import { MapPin } from "lucide-react";
import type { Listing } from "@/data/listing";
import styles from "./Location.module.css";

interface LocationProps {
  listing: Listing;
}

export default function LocationSection({ listing }: LocationProps) {
  const { location } = listing;
  // Use a static map image (Google Maps Static API-style layout)
  const mapUrl = `https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop`;

  return (
    <div className={styles.section} id="location">
      <h2 className={styles.heading}>Where you&apos;ll be</h2>
      <p className={styles.locationName}>
        <MapPin size={16} aria-hidden="true" />
        {location.neighborhood}, {location.city}, {location.state}, {location.country}
      </p>

      {/* Map placeholder */}
      <div className={styles.mapContainer} role="img" aria-label={`Map of ${location.neighborhood}, ${location.city}`}>
        <div className={styles.mapPlaceholder}>
          <div className={styles.mapPin} aria-hidden="true">
            <MapPin size={32} fill="var(--color-brand)" color="white" />
          </div>
          <div className={styles.mapOverlay}>
            <p className={styles.mapLabel}>{location.neighborhood}, {location.city}</p>
            <p className={styles.mapSublabel}>{location.state}, {location.country}</p>
          </div>
        </div>
      </div>

      <p className={styles.description}>{location.description}</p>
    </div>
  );
}
