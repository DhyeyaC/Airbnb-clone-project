"use client";

import { useState } from "react";
import type { Listing } from "@/data/listing";
import styles from "./Description.module.css";

interface DescriptionProps {
  listing: Listing;
}

export default function Description({ listing }: DescriptionProps) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 400;
  const shouldTruncate = listing.description.length > maxLength;
  const displayText =
    shouldTruncate && !expanded
      ? listing.description.slice(0, maxLength) + "..."
      : listing.description;

  // Render markdown-like bold text
  const renderText = (text: string) => {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={i} className={styles.boldLine}>
            {line.slice(2, -2)}
          </p>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <p key={i} className={styles.bulletLine}>
            {line}
          </p>
        );
      }
      if (line === "") {
        return <br key={i} />;
      }
      return (
        <p key={i} className={styles.paragraph}>
          {line}
        </p>
      );
    });
  };

  return (
    <div className={styles.section}>
      <div className={styles.text}>{renderText(displayText)}</div>
      {shouldTruncate && (
        <button
          className={styles.showMoreBtn}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Show more →"}
        </button>
      )}
    </div>
  );
}
