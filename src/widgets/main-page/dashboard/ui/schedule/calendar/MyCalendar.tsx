import React from "react";
import { calendar } from "./constants/calendar";
import styles from "./myCalendar.module.scss";
import { lessonList } from "./constants/lesson";
import { LessonFilter } from "./lesson-filter/LessonFilter";

export const MyCalendar: React.FC = () => {
  const currentMonthIndex = new Date().getMonth();
  const daysInMonth = calendar.map((item) => (item.even ? 31 : 30));
  const daysFromPrevMonth = daysInMonth[currentMonthIndex]
    ? [27, 28, 29, 30, 31]
    : [26, 27, 28, 29, 30];

  const weekDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

  const days = Array.from({ length: 35 }, (_, i) => {
    if (i < daysFromPrevMonth.length) {
      return (
        <div key={i}>
          <span className={styles.daysFromPrevMonth}>
            {daysFromPrevMonth[i]}
          </span>
        </div>
      );
    } else {
      return i - daysFromPrevMonth.length + 1;
    }
  });

  return (
    <div className={styles.calendar}>
      {weekDays.map((day, index) => (
        <div key={index} className={styles.calendar__header}>
          <span>{day}</span>
        </div>
      ))}
      {days.map((day, index) => (
        <div
          key={index}
          className={`${styles.calendar__item} ${
            index < daysFromPrevMonth.length ? styles.prev__month : ""
          }`}
        >
          <div className={styles.dayContainer}>
            <span>{day}</span>
          </div>

          <div className={styles.event__container}>
            <LessonFilter index={index} />
          </div>
        </div>
      ))}
    </div>
  );
};
