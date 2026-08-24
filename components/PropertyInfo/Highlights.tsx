"use client";

import Image from "next/image";
import { Medal, MapPin, Key } from "lucide-react";
import type { Listing } from "@/data/listing";
import styles from "./Highlights.module.css";

const iconMap: Record<string, React.ReactNode> = {
  Medal: <Medal size={24} aria-hidden="true" />,
  MapPin: <MapPin size={24} aria-hidden="true" />,
  Key: <Key size={24} aria-hidden="true" />,
};

interface HighlightsProps {
  listing: Listing;
}

export default function Highlights({ listing }: HighlightsProps) {
  return (
    <div className={styles.section} aria-label="Property highlights">
      {/* Host avatar + description */}
      <div className={styles.hostRow}>
        <div className={styles.hostAvatar}>
          <Image
            src={listing.host.avatar}
            alt={listing.host.name}
            width={56}
            height={56}
            className={styles.avatar}
          />
          {listing.host.isSuperhost && (
            <span className={styles.superhostBadge} aria-label="Superhost">
              <Medal size={12} fill="currentColor" aria-hidden="true" />
            </span>
          )}
        </div>
        <div>
          <h2 className={styles.hostedBy}>
            {listing.type} hosted by {listing.host.name}
          </h2>
          <p className={styles.hostSince}>
            {listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds} bed · {listing.bathrooms} bath
          </p>
        </div>
      </div>

      <hr className="divider" />

      {/* Highlights */}
      <ul className={styles.highlights} role="list">
        {listing.highlights.map((highlight, i) => (
          <li key={i} className={styles.highlight}>
            <span className={styles.highlightIcon} aria-hidden="true">
              {iconMap[highlight.icon] || <Key size={24} />}
            </span>
            <div>
              <p className={styles.highlightTitle}>{highlight.title}</p>
              <p className={styles.highlightDesc}>{highlight.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
