"use client";

import { useState, useRef, useEffect } from "react";
import {
  Wifi, UtensilsCrossed, Wind, Bath, Sparkles, Tv, Shirt, Package,
  Shield, Waves, Car, Monitor, Coffee, Zap, Droplets, X, ChevronRight
} from "lucide-react";
import type { Listing, Amenity } from "@/data/listing";
import styles from "./Amenities.module.css";
import { useLockScroll } from "@/hooks/useLockScroll";

const iconMap: Record<string, React.ComponentType<{ size?: number; aria?: string; "aria-hidden"?: "true" }>> = {
  Wifi, UtensilsCrossed, Wind, Bath, Sparkles, Tv, Shirt, Package,
  Shield, Waves, Car, Monitor, Coffee, Zap, Droplets,
  Refrigerator: Package, // fallback
};

function AmenityIcon({ iconName }: { iconName: string }) {
  const Icon = iconMap[iconName] || Package;
  return <Icon size={24} aria-hidden="true" />;
}

interface AmenitiesProps {
  listing: Listing;
}

export default function Amenities({ listing }: AmenitiesProps) {
  const [showAll, setShowAll] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useLockScroll(showAll);

  // Focus management
  useEffect(() => {
    if (showAll && closeRef.current) {
      closeRef.current.focus();
    }
  }, [showAll]);

  // Keyboard close
  useEffect(() => {
    if (!showAll) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowAll(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showAll]);

  const displayCount = 10;
  const displayedAmenities = listing.amenities.slice(0, displayCount);

  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>What this place offers</h2>
      <ul className={styles.grid} role="list">
        {displayedAmenities.map((amenity) => (
          <li key={amenity.id} className={styles.item}>
            <span className={styles.icon}>
              <AmenityIcon iconName={amenity.icon} />
            </span>
            <div>
              <span className={styles.label}>{amenity.label}</span>
              {amenity.description && (
                <p className={styles.desc}>{amenity.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      {listing.amenities.length > displayCount && (
        <button
          className={styles.showAllBtn}
          onClick={() => setShowAll(true)}
          aria-haspopup="dialog"
        >
          Show all {listing.amenities.length} amenities
        </button>
      )}

      {/* Modal */}
      {showAll && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="All amenities"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowAll(false);
          }}
        >
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <button
                ref={closeRef}
                className={styles.closeBtn}
                onClick={() => setShowAll(false)}
                aria-label="Close amenities"
              >
                <X size={20} aria-hidden="true" />
              </button>
              <h3 className={styles.modalTitle}>What this place offers</h3>
            </div>
            <div className={styles.modalBody}>
              <ul className={styles.modalGrid} role="list">
                {listing.amenities.map((amenity) => (
                  <li key={amenity.id} className={styles.modalItem}>
                    <span className={styles.icon}>
                      <AmenityIcon iconName={amenity.icon} />
                    </span>
                    <div>
                      <span className={styles.label}>{amenity.label}</span>
                      {amenity.description && (
                        <p className={styles.desc}>{amenity.description}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
