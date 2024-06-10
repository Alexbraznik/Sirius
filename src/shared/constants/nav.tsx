import {
  Achievements,
  ConnectivityCheck,
  Exercises,
  Library,
  Main,
  Payment,
  Questions,
  Schedule,
  Settings,
} from "../index";

export interface INavList {
  title: string;
  path: string;
  icon: any;
}

export const navList: INavList[] = [
  { title: "Главная", path: "/", icon: <Main /> },
  { title: "Расписание", path: "/schedule", icon: <Schedule /> },
  { title: "Оплата", path: "/", icon: <Payment /> },
  { title: "Достижения", path: "/", icon: <Achievements /> },
  { title: "Тренажеры", path: "/", icon: <Exercises /> },
  { title: "Библиотека", path: "/", icon: <Library /> },
  { title: "Проверка связи", path: "/", icon: <ConnectivityCheck /> },
  { title: "Настройка", path: "/", icon: <Settings /> },
  { title: "Вопросы", path: "/", icon: <Questions /> },
];
