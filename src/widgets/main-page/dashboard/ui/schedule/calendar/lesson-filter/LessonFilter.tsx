import React from "react";
import styles from "./lessonFilter.module.scss";
import { lessonList } from "../constants/lesson";
import { Wallet } from "../../../../../../../shared";

interface LessonFilterProps {
  index: number;
}

export const LessonFilter: React.FC<LessonFilterProps> = ({ index }) => {
  const getClassNames = (item: any) => {
    let classNames = [styles.event__item];
    if (item.borderViolet) classNames.push(styles.borderViolet);
    if (item.borderBlack) classNames.push(styles.borderBlack);
    if (item.borderRed) classNames.push(styles.borderRed);
    if (item.wallet) classNames.push(styles.wallet);
    if (item.bgcViolet) classNames.push(styles.bgcViolet);
    if (item.bgcGray) classNames.push(styles.bgcGray);
    if (item.borderGreen) classNames.push(styles.borderGreen);
    if (item.crossed) classNames.push(styles.crossed);
    if (item.bgcGreen) classNames.push(styles.bgcGreen);

    return classNames.join(" ");
  };

  return (
    <div>
      {lessonList
        .filter((item) => index + 1 === item.id)
        .map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className={`${styles.event__item} ${getClassNames(item)}`}
          >
            <div className={styles.item__wallet}>
              <p className={styles.item__time}>{item.time}</p>
              {item.wallet && <Wallet />}
            </div>
            <p className={styles.item__title}>{item.title}</p>
          </div>
        ))}
    </div>
  );
};
