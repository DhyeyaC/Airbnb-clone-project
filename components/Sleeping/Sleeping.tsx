"use client";

import { BedDouble } from "lucide-react";
import type { Listing } from "@/data/listing";
import styles from "./Sleeping.module.css";

interface SleepingProps {
  listing: Listing;
}

export default function SleepingArrangements({ listing }: SleepingProps) {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Sleeping arrangements</h2>
      <div className={styles.cards}>
        {listing.sleepingArrangements.map((arr, i) => (
          <div key={i} className={styles.card} role="article">
            <BedDouble size={32} className={styles.icon} aria-hidden="true" />
            <h3 className={styles.roomName}>{arr.room}</h3>
            <p className={styles.bedType}>{arr.beds.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
