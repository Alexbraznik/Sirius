import Image from "next/image";
import { Close, Exit, anna_avatar, mihail_avatar } from "../../../../../shared";
import styles from "./profile.module.scss";
import Link from "next/link";

interface IProfileProps {
  isOpen: boolean;
  setIsOpen: any;
}

export const Profile: React.FC<IProfileProps> = ({ isOpen, setIsOpen }) => {
  return (
    isOpen && (
      <div className={`${styles.profile__window} ${styles.window__visible}`}>
        <div className={styles.tooltip__arrow}></div>
        <Close
          className={styles.close__window}
          onClick={() => setIsOpen(false)}
        />
        <div className={styles.container}>
          <h5>Смена пользователя</h5>
          <div className={`${styles.profile__item} ${styles.item__mihail}`}>
            <Image
              className={styles.item__img}
              src={mihail_avatar}
              alt="mihail_avatar"
              width={32}
              height={32}
            />
            <div className={styles.item__text}>
              <span>Михаил</span>
              <p>Это вы</p>
            </div>
          </div>

          <div className={`${styles.profile__item} ${styles.profile__anna}`}>
            <Image
              className={styles.item__img}
              src={anna_avatar}
              alt="mihail_avatar"
              width={32}
              height={32}
            />
            <div className={styles.item__text}>
              <span>Анна</span>
            </div>
          </div>
        </div>
        <div className={styles.exit}>
          <button>
            <Link href={"/auth"} className={styles.link}>
              Выход
            </Link>
          </button>
          <Link href={"/auth"} className={styles.link}>
            <Exit className={styles.exit__icon} />
          </Link>
        </div>
      </div>
    )
  );
};
