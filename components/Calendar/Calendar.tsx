import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Calendar.module.css";

const octoberDays = [
  ["", "", "", "1", "2", "3", "4"],
  ["5", "6", "7", "8", "9", "10", "11"],
  ["12", "13", "14", "15", "16", "17", "18"],
  ["19", "20", "21", "22", "23", "24", "25"],
  ["26", "27", "28", "29", "30", "31", ""],
];

const novemberDays = [
  ["", "", "", "", "", "", "1"],
  ["2", "3", "4", "5", "6", "7", "8"],
  ["9", "10", "11", "12", "13", "14", "15"],
  ["16", "17", "18", "19", "20", "21", "22"],
  ["23", "24", "25", "26", "27", "28", "29"],
  ["30", "", "", "", "", "", ""],
];

function Month({ name, days }: { name: string; days: string[][] }) {
  return (
    <div className={styles.month}>
      <h3>{name}</h3>
      <div className={styles.weekdays} aria-hidden="true">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <span key={`${day}-${index}`}>{day}</span>
        ))}
      </div>
      <div className={styles.days} role="grid" aria-label={`${name} availability`}>
        {days.flatMap((week, weekIndex) =>
          week.map((day, dayIndex) => {
            const isSelected = name === "October 2024" && day === "18";
            const isRange = name === "October 2024" && ["17", "19"].includes(day);
            return (
              <span
                key={`${weekIndex}-${dayIndex}`}
                className={`${styles.day} ${isSelected ? styles.selected : ""} ${isRange ? styles.range : ""}`}
                role="gridcell"
              >
                {day}
              </span>
            );
          }),
        )}
      </div>
    </div>
  );
}

export default function Calendar() {
  return (
    <section className={styles.section} aria-label="Availability calendar">
      <div className={styles.header}>
        <div>
          <h2>5 nights in Candolim</h2>
          <p>Oct 13, 2024 - Oct 18, 2024</p>
        </div>
        <div className={styles.controls}>
          <button type="button" aria-label="Previous month"><ChevronLeft size={16} /></button>
          <button type="button" aria-label="Next month"><ChevronRight size={16} /></button>
        </div>
      </div>
      <div className={styles.months}>
        <Month name="October 2024" days={octoberDays} />
        <Month name="November 2024" days={novemberDays} />
      </div>
      <button type="button" className={styles.clearButton}>Clear dates</button>
    </section>
  );
}
