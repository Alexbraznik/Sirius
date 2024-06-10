import Image from "next/image";
import styles from "./sectionTop.module.scss";
import { wolf } from "../../../../../../shared";

export const SectionTop: React.FC = () => {
  return (
    <div className={styles.section__top}>
      <div className={styles.section__one}>
        <div className={styles.one__description}>
          <h6>До 31 декабря любой курс со скидкой 20%</h6>
          <p>
            До конца года у вас есть уникальная возможность воспользоваться
            нашей новогодней скидкой 20% на любой курс!
          </p>
        </div>

        <Image
          src={wolf}
          alt="wolf-gift"
          priority
          className={styles.image__container}
        />
      </div>
      <div className={styles.section__two}>
        <div className={styles.two__wrapper}>
          <div className={styles.two__description}>
            <h6>Следующее занятие начинается через:</h6>
            <p>
              6<span>д</span>12<span>ч</span>24<span>мин</span>
            </p>
          </div>
          <button>Button</button>
        </div>
      </div>
      <div className={styles.section__three}></div>
    </div>
  );
};
