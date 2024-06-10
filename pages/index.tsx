import styles from "./index.module.scss";
import MainPage from "./main-page";

export default function HomePage(): JSX.Element {
  // http://localhost:3000 - Главная страница
  // http://localhost:3000/auth - Страница с регистрацией(можно перейти по кнопке "выход" в профиле)
  // http://localhost:3000/schedule - Страница с расписанием(можно перейти в навигационном меню слева)

  return (
    <div className={styles.container}>
      <MainPage />
    </div>
  );
}
