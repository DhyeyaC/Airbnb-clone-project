"use client";

import Image from "next/image";
import { Star, Medal } from "lucide-react";
import type { Listing } from "@/data/listing";
import styles from "./Host.module.css";

interface HostProps {
  listing: Listing;
}

export default function HostSection({ listing }: HostProps) {
  const { host } = listing;

  return (
    <div className={styles.section}>
      {/* Host header */}
      <div className={styles.header}>
        <div className={styles.avatarWrapper}>
          <Image
            src={host.avatar}
            alt={host.name}
            width={64}
            height={64}
            className={styles.avatar}
          />
          {host.isSuperhost && (
            <span className={styles.superhostBadge} aria-label="Superhost">
              <Medal size={14} fill="currentColor" aria-hidden="true" />
            </span>
          )}
        </div>
        <div className={styles.hostInfo}>
          <h2 className={styles.hostName}>Hosted by {host.name}</h2>
          <p className={styles.hostSince}>Joined in {host.since}</p>
        </div>
      </div>

      {/* Host stats */}
      <div className={styles.stats} role="list">
        <div className={styles.stat} role="listitem">
          <Star size={16} fill="currentColor" aria-hidden="true" />
          <span>{host.reviewCount} reviews</span>
        </div>
        <span className={styles.dot} aria-hidden="true">·</span>
        <div className={styles.stat} role="listitem">
          <Star size={16} fill="currentColor" aria-hidden="true" />
          <span>{host.rating} rating</span>
        </div>
        {host.isSuperhost && (
          <>
            <span className={styles.dot} aria-hidden="true">·</span>
            <div className={styles.stat} role="listitem">
              <Medal size={16} aria-hidden="true" />
              <span>Superhost</span>
            </div>
          </>
        )}
      </div>

      {/* About host */}
      <div className={styles.body}>
        <p className={styles.about}>{host.about}</p>

        <div className={styles.responseMeta}>
          <p className={styles.responseRow}>
            <strong>Response rate:</strong> {host.responseRate}%
          </p>
          <p className={styles.responseRow}>
            <strong>Response time:</strong> {host.responseTime}
          </p>
        </div>

        {host.isSuperhost && (
          <div className={styles.superhostInfo}>
            <Medal size={20} aria-hidden="true" />
            <div>
              <p className={styles.superhostTitle}>{host.name} is a Superhost</p>
              <p className={styles.superhostDesc}>
                Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
              </p>
            </div>
          </div>
        )}

        <button className={styles.contactBtn} aria-label={`Contact ${host.name}`}>
          Contact host
        </button>

        <p className={styles.safetyNote}>
          To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
        </p>
      </div>
    </div>
  );
}
