"use client";

import styles from "./Footer.module.css";

const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Sitemap", href: "#" },
  { label: "Destinations", href: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <p className={styles.copy}>
          © 2024 Airbnb, Inc. · All rights reserved
        </p>
        <nav className={styles.links} aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
