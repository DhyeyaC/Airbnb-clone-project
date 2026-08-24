"use client"

import { useState, useCallback } from "react"
import { CalendarDays, ChevronLeft, ChevronRight, ShieldCheck, Users, House } from "lucide-react"
import type { Listing } from "@/data/listing"
import { listing as listingData } from "@/data/listing"
import Header from "@/components/Header/Header"
import Gallery from "@/components/Gallery/Gallery"
import PropertyTitle from "@/components/PropertyInfo/PropertyTitle"
import Highlights from "@/components/PropertyInfo/Highlights"
import Description from "@/components/PropertyInfo/Description"
import Amenities from "@/components/Amenities/Amenities"
import SleepingArrangements from "@/components/Sleeping/Sleeping"
import Calendar from "@/components/Calendar/Calendar"
import LocationSection from "@/components/Location/Location"
import Reviews from "@/components/Reviews/Reviews"
import HostSection from "@/components/Host/Host"
import BookingCard from "@/components/Booking/BookingCard"
import PhotoTour from "@/components/PhotoTour/PhotoTour"
import Lightbox from "@/components/Lightbox/Lightbox"
import Footer from "@/components/Footer/Footer"
import styles from "./page.module.css"

const knowItems = [
  {
    icon: CalendarDays,
    title: "Cancellation policy",
    lines: [
      "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
      "Review this host's full policy for details.",
    ],
    linkText: "Learn more",
  },
  {
    icon: House,
    title: "House rules",
    lines: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "3 guests maximum"],
    linkText: "Learn more",
  },
  {
    icon: ShieldCheck,
    title: "Safety & property",
    lines: [
      "Carbon monoxide alarm not reported",
      "Smoke alarm not reported",
      "Exterior security cameras on property",
    ],
    linkText: "Learn more",
  },
]

const nearbyStays = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=900&fit=crop",
    title: "Beautiful Studio with a view to die for",
    price: "₹23,600",
    rating: "4.91",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=900&fit=crop",
    title: "NAQAB - 1bhk with private pool",
    price: "₹42,218",
    rating: "4.95",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=900&fit=crop",
    title: "Gorgeous Luxury Flat with plunge pool",
    price: "₹44,506",
    rating: "4.94",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=900&fit=crop",
    title: "Luxury Casa Bella 1BHK with plunge pool",
    price: "₹39,942",
    rating: "4.95",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=900&fit=crop",
    title: "The Tropical Studio | 5 mins to Beach",
    price: "₹22,824",
    rating: "4.96",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=900&fit=crop",
    title: "The Tropical Studio | 5 mins to Beach",
    price: "₹22,824",
    rating: "4.96",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=900&fit=crop",
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: "₹39,942",
    rating: "4.95",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=900&fit=crop",
    title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool",
    price: "₹45,648",
    rating: "5.0",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=900&fit=crop",
    title: "Luxury Apt | Private Pool | 6 Mins from Beach",
    price: "₹48,786",
    rating: "4.93",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=900&fit=crop",
    title: "Serendipity Cottage - Calm Stay in Calangute-Baga.",
    price: "₹22,824",
    rating: "4.92",
  },
]

export default function Page() {
  const listing: Listing = listingData

  // Photo tour modal state
  const [photoTourOpen, setPhotoTourOpen] = useState(false)
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [nearbyPage, setNearbyPage] = useState(0)

  const cardsPerPage = 5
  const nearbyPageCount = Math.ceil(nearbyStays.length / cardsPerPage)
  const visibleNearbyStays = nearbyStays.slice(
    nearbyPage * cardsPerPage,
    nearbyPage * cardsPerPage + cardsPerPage,
  )

  const nextNearbyPage = useCallback(() => {
    setNearbyPage((current) => Math.min(current + 1, nearbyPageCount - 1))
  }, [nearbyPageCount])

  const prevNearbyPage = useCallback(() => {
    setNearbyPage((current) => Math.max(current - 1, 0))
  }, [])

  const openPhotoTour = useCallback((_index?: number) => setPhotoTourOpen(true), [])
  const closePhotoTour = useCallback(() => setPhotoTourOpen(false), [])

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])
  const closeLightbox = useCallback(() => setLightboxOpen(false), [])
  const prevLightbox = useCallback(() => {
    setLightboxIndex((i) => Math.max(0, i - 1))
  }, [])
  const nextLightbox = useCallback(() => {
    setLightboxIndex((i) => Math.min(listing.images.length - 1, i + 1))
  }, [listing.images.length])

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.titleSection}>
          <PropertyTitle listing={listing} />
        </div>

        {/* Hero gallery */}
        <Gallery images={listing.images} onOpenPhotoTour={openPhotoTour} />

        {/* Main two‑column layout */}
        <div className={styles.columns}>
          {/* Left column – details */}
          <section className={styles.leftColumn}>
            <div className={styles.propertyDetails}>
              <h2>{listing.type} in {listing.location.city}, {listing.location.country}</h2>
              <p>{listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds} bed · {listing.bathrooms} bathroom</p>
            </div>
            <Highlights listing={listing} />
            <Description listing={listing} />
            <SleepingArrangements listing={listing} />
            <Amenities listing={listing} />
            <Calendar />
            <Reviews listing={listing} />
            <LocationSection listing={listing} />
            <HostSection listing={listing} />
          </section>

          {/* Right column – booking card */}
          <aside className={styles.rightColumn}>
            <BookingCard listing={listing} />
          </aside>
        </div>

        <section className={styles.bottomSection} aria-label="Know before you book and nearby stays">
          <div className={styles.knowledgeSection}>
            <h2 className={styles.sectionTitle}>Things to know</h2>

            <div className={styles.knowledgeGrid}>
              {knowItems.map(({ icon: Icon, title, lines, linkText }) => (
                <article key={title} className={styles.knowledgeCard}>
                  <div className={styles.knowledgeIconWrap} aria-hidden="true">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <h3 className={styles.knowledgeTitle}>{title}</h3>

                  <div className={styles.knowledgeText}>
                    {lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>

                  <button className={styles.learnLink} type="button">
                    {linkText}
                  </button>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.nearbySection}>
            <div className={styles.nearbyHeader}>
              <h2 className={styles.sectionTitle}>More stays nearby</h2>

              <div className={styles.sliderControls} aria-label="Nearby stay navigation">
                <span className={styles.sliderCounter}>
                  {nearbyPage + 1} / {nearbyPageCount}
                </span>
                <button
                  type="button"
                  className={styles.sliderButton}
                  aria-label="Previous stays"
                  onClick={prevNearbyPage}
                  disabled={nearbyPage === 0}
                >
                  <ChevronLeft size={14} strokeWidth={1.8} />
                </button>
                <button
                  type="button"
                  className={styles.sliderButton}
                  aria-label="Next stays"
                  onClick={nextNearbyPage}
                  disabled={nearbyPage === nearbyPageCount - 1}
                >
                  <ChevronRight size={14} strokeWidth={1.8} />
                </button>
              </div>
            </div>

            <div className={styles.stayGrid}>
              {visibleNearbyStays.map((stay) => (
                <article key={stay.id} className={styles.stayCard}>
                  <div className={styles.stayImageWrap}>
                    <img src={stay.image} alt={stay.title} className={styles.stayImage} />
                  </div>

                  <div className={styles.stayDetails}>
                    <h3>{stay.title}</h3>
                    <p className={styles.stayPriceRow}>
                      <span className={styles.stayPrice}>{stay.price}</span>
                      <span className={styles.stayMeta}> ★ {stay.rating}</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Modals */}
      <PhotoTour
        images={listing.images}
        isOpen={photoTourOpen}
        onClose={closePhotoTour}
        onOpenLightbox={openLightbox}
      />
      <Lightbox
        images={listing.images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
      />

      <Footer />
    </div>
  )
}
