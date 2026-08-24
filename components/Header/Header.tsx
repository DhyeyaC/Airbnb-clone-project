"use client";

import { useState, useEffect } from "react";
import { Globe, Menu, Search, User } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a href="/" className={styles.logo} aria-label="Airbnb home">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt="Airbnb"
            className={styles.logoImage}
          />
        </a>

        {/* Search bar */}
        <div className={styles.searchPill} role="search" aria-label="Search trips">
          <button className={styles.searchBtn} aria-label="Where to?">
            <span className={styles.searchLabel}>Anywhere</span>
          </button>
          <span className={styles.searchDivider} aria-hidden="true" />
          <button className={styles.searchBtn} aria-label="Select dates">
            <span className={styles.searchLabel}>Any week</span>
          </button>
          <span className={styles.searchDivider} aria-hidden="true" />
          <button className={`${styles.searchBtn} ${styles.searchBtnLast}`} aria-label="Who's coming?">
            <span className={`${styles.searchLabel} ${styles.guestsLabel}`}>Add guests</span>
            <span className={styles.searchIcon} aria-hidden="true">
              <Search size={16} strokeWidth={2.5} />
            </span>
          </button>
        </div>

        {/* Right nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#" className={styles.navLink}>
            Airbnb your home
          </a>
          <button
            className={styles.iconBtn}
            aria-label="Select language and currency"
          >
            <Globe size={18} />
          </button>
          <button
            className={styles.userMenuBtn}
            aria-label="User menu"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Menu size={18} />
            <span className={styles.userIcon} aria-hidden="true">
              <User size={22} />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}

function AirbnbLogo() {
  return (
    <svg
      viewBox="0 0 113.37 124.64"
      width="32"
      height="32"
      aria-hidden="true"
      style={{ fill: "#FF385C" }}
    >
      <path d="M56.68 0C25.39 0 0 25.39 0 56.68c0 31.29 25.39 56.68 56.68 56.68s56.69-25.39 56.69-56.68C113.37 25.39 87.98 0 56.68 0zm0 104.64C29.83 104.64 8 82.81 8 56.68 8 30.55 29.83 8.72 56.68 8.72s48.69 21.83 48.69 47.96c0 26.13-21.83 47.96-48.69 47.96zM56.68 28.7c-7.93 0-14.36 6.43-14.36 14.36 0 7.93 6.43 14.36 14.36 14.36s14.36-6.43 14.36-14.36c0-7.93-6.43-14.36-14.36-14.36zm0 20.7c-3.49 0-6.34-2.85-6.34-6.34 0-3.49 2.85-6.34 6.34-6.34s6.34 2.85 6.34 6.34c0 3.5-2.85 6.34-6.34 6.34zm0 9.41c-10.91 0-22.93 5.72-27.81 17.11l-3.07 7.14c-1.24 2.9-1.27 6.18-.09 9.1 1.18 2.92 3.42 5.24 6.27 6.59 1.95.93 4.08 1.4 6.24 1.4h36.93c2.15 0 4.28-.47 6.24-1.4 2.85-1.35 5.1-3.67 6.27-6.59 1.18-2.92 1.15-6.2-.09-9.1l-3.07-7.14C79.61 64.53 67.59 58.81 56.68 58.81zm22.03 37.97H34.65c-1.13 0-2.24-.25-3.26-.73-1.49-.71-2.67-1.93-3.28-3.45-.61-1.52-.59-3.23.05-4.75l3.07-7.14c3.97-9.24 14.01-14.18 25.45-14.18s21.48 4.94 25.45 14.18l3.07 7.14c.64 1.52.66 3.23.05 4.75-.61 1.52-1.79 2.74-3.28 3.45-1.02.48-2.13.73-3.26.73z" />
    </svg>
  );
}
