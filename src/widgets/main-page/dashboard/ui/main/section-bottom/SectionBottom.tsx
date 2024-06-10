import { UiButton } from "../../../../../../entities/UiButton";
import { Teacher } from "../../../../../../shared";
import {
  upcomingLessonList,
  activityBalance,
} from "../../../../../../shared/constants";
import styles from "./sectionBottom.module.scss";

export const SectionBottom: React.FC = () => {
  return (
    <div className={styles.section__bottom}>
      <div className={styles.section__one}>
        <div>
          <h6>Баланс занятий</h6>
          {activityBalance.map((item, index) => (
            <div key={index} className={styles.lesson__item}>
              <p>{item.lesson}</p>
              <div className={styles.lesson__hour}>
                <span>{item.hour}</span>
              </div>
            </div>
          ))}
        </div>
        <button>Button</button>
      </div>

      <div className={styles.section__two}>
        <div className={styles.two__container}>
          <h6>Ближайшие уроки</h6>
          {upcomingLessonList.map((item, index) => (
            <div key={index} className={styles.upcoming__item}>
              <div className={styles.item_date}>
                <span>{item.day}</span> <p>{item.month}</p>
              </div>
              <p className={styles.learn}>{item.lesson}</p>
              <p className={styles.time}>{item.time}</p>
              <Teacher className={styles.teacher__icon} />
              <div className={styles.teacher}>
                <p>{item.teacher}</p>
              </div>
              <div className={styles.btn}>
                <UiButton variant="primary">Button</UiButton>
                <UiButton variant="secondary">Button</UiButton>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.main__btn}>Button</button>
      </div>
    </div>
  );
};
