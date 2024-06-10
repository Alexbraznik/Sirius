import styles from "./header.module.scss";
import { ArrowDown, mihail_avatar, Chat } from "../../../../../shared";
import Image from "next/image";
import { Profile } from "../profile/Profile";
import { useState } from "react";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.wrapper__header}>
      <div className={styles.header}>
        <p>
          Добро пожаловать, <span>Михаил</span>!
        </p>
        <div className={styles.wrapper__icons}>
          <div className={styles.chat}>
            <div className={styles.notify}>
              <p>2</p>
            </div>
            <Chat />
          </div>
          <div className={styles.profile__icons}>
            <div
              className={styles.iconArrow}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image src={mihail_avatar} alt="аватар" width={42} height={42} />
              <ArrowDown />
            </div>
            <Profile isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};
