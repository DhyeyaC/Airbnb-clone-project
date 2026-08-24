"use client";

import { useState } from "react";
import { Star, ChevronDown } from "lucide-react";
import type { Listing } from "@/data/listing";
import styles from "./BookingCard.module.css";
import { formatCurrency } from "@/lib/utils";

interface BookingCardProps {
  listing: Listing;
}

export default function BookingCard({ listing }: BookingCardProps) {
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const { pricing } = listing;
  const totalNights = pricing.nights;
  const nightlyTotal = pricing.nightlyRate * totalNights;
  const grandTotal = nightlyTotal + pricing.cleaningFee + pricing.serviceFee;

  return (
    <aside className={styles.card} aria-label="Reserve this property">
      <div className={styles.offer}>
        <span className={styles.offerTag} aria-hidden="true">◆</span>
        <p>Get 10% off your next stay.<br /><a href="#terms">Terms apply</a></p>
        <button type="button">Claim</button>
      </div>

      {/* Price */}
      <div className={styles.priceRow}>
        <div className={styles.price}>
          <span className={styles.amount}>{formatCurrency(pricing.nightlyRate)}</span>
          <span className={styles.perNight}> night</span>
        </div>
        <div className={styles.ratingSmall} aria-label={`${listing.rating} rating, ${listing.reviewCount} reviews`}>
          <Star size={12} fill="currentColor" aria-hidden="true" />
          <span className={styles.ratingValue}>{listing.rating}</span>
          <span className={styles.reviewCount}>· {listing.reviewCount} reviews</span>
        </div>
      </div>

      {/* Date pickers */}
      <div className={styles.datePicker} role="group" aria-label="Select dates">
        <div className={styles.dateGrid}>
          <div className={styles.dateField}>
            <label htmlFor="check-in" className={styles.dateLabel}>CHECK-IN</label>
            <input
              id="check-in"
              type="date"
              className={styles.dateInput}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              aria-label="Check-in date"
            />
          </div>
          <div className={styles.dateDivider} aria-hidden="true" />
          <div className={styles.dateField}>
            <label htmlFor="check-out" className={styles.dateLabel}>CHECKOUT</label>
            <input
              id="check-out"
              type="date"
              className={styles.dateInput}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              aria-label="Check-out date"
            />
          </div>
        </div>

        {/* Guests */}
        <div className={styles.guestsField}>
          <div>
            <label className={styles.dateLabel}>GUESTS</label>
            <div className={styles.guestsRow}>
              <span className={styles.guestCount}>{guests} guest{guests !== 1 ? "s" : ""}</span>
              <ChevronDown size={16} aria-hidden="true" />
            </div>
          </div>
          <div className={styles.guestControls}>
            <button
              className={styles.guestBtn}
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              aria-label="Remove guest"
              disabled={guests <= 1}
            >
              –
            </button>
            <span className={styles.guestNum} aria-live="polite">{guests}</span>
            <button
              className={styles.guestBtn}
              onClick={() => setGuests((g) => Math.min(listing.guests, g + 1))}
              aria-label="Add guest"
              disabled={guests >= listing.guests}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Reserve button */}
      <button className={styles.reserveBtn} id="reserve-btn">
        Reserve
      </button>

      <p className={styles.chargeNote}>You won&apos;t be charged yet</p>

      {/* Price breakdown */}
      <div className={styles.breakdown} aria-label="Price breakdown">
        <div className={styles.breakdownRow}>
          <button className={styles.underlineBtn}>
            {formatCurrency(pricing.nightlyRate)} × {totalNights} nights
          </button>
          <span>{formatCurrency(nightlyTotal)}</span>
        </div>
        <div className={styles.breakdownRow}>
          <button className={styles.underlineBtn}>Cleaning fee</button>
          <span>{formatCurrency(pricing.cleaningFee)}</span>
        </div>
        <div className={styles.breakdownRow}>
          <button className={styles.underlineBtn}>Airbnb service fee</button>
          <span>{formatCurrency(pricing.serviceFee)}</span>
        </div>
        <hr className={styles.totalDivider} />
        <div className={`${styles.breakdownRow} ${styles.totalRow}`}>
          <strong>Total before taxes</strong>
          <strong>{formatCurrency(grandTotal)}</strong>
        </div>
      </div>
    </aside>
  );
}
