import { ArrowLeft, ArrowRight, Help } from "../../../../../shared";
import { MyCalendar } from "./calendar/MyCalendar";
import styles from "./schedule.module.scss";

export const Schedule: React.FC = () => {
  return (
    <div className={styles.schedule__container}>
      <div className={styles.header}>
        <select defaultValue="">
          <option hidden>Выбрать предмет</option>
          <option>Математика</option>
        </select>
        <button>Изменить расписание</button>
      </div>

      <div className={styles.schedule}>
        <div className={styles.schedule__date}>
          <div className={styles.date__change}>
            <ArrowLeft /> <span>Март 2024</span>
            <ArrowRight />
          </div>
          <button>Сегодня</button> <Help className={styles.date__help} />
        </div>

        <div>
          <div>
            <MyCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};
