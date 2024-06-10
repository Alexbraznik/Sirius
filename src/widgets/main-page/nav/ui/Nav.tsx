import Image from "next/image";
import styles from "./nav.module.scss";
import { logo, gift, navList } from "../../../../shared";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Nav: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const router = useRouter();

  useEffect(() => {
    const selectedIndex = navList.findIndex(
      (item) => item.path === router.pathname
    );
    setSelectedItem(selectedIndex);
  }, [router.pathname]);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" priority />
      </div>
      <ul className={styles.item__list}>
        {navList.map((item, index) => (
          <Link href={item.path} key={index} className={styles.item__link}>
            <div
              className={`${styles.item__container} ${
                selectedItem === index ? styles.selected : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              <li className={styles.item}>
                <span className={styles.item__icon}>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            </div>
          </Link>
        ))}
      </ul>
      <div className={styles.inviteFriends}>
        <div className={styles.inviteFriends__text}>
          <p className={styles.inviteFriends__free}>Учитесь бесплатно</p>
          <p className={styles.inviteFriends__textLight}>
            Приводите друзей с детьми заниматься в Sirius Future и получайте
            подарки!
          </p>
          <button className={styles.inviteFriends__btn}>Узнать</button>
          <div className={styles.gift}>
            <Image className={styles.gift} src={gift} alt="gift" />
          </div>
        </div>
      </div>
    </div>
  );
};
