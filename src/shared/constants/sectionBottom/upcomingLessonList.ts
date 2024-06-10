export interface IUpcomingLessonList {
  day: number;
  month: string;
  lesson: string;
  time: string;
  teacher: string;
}

export const upcomingLessonList: IUpcomingLessonList[] = [
  {
    day: 1,
    month: "мая",
    lesson: "Ментальная Арифметика",
    time: "11:00-11:11",
    teacher: "Белкина Инна",
  },
  {
    day: 30,
    month: "октября",
    lesson: "Программирование",
    time: "14:00-14:25",
    teacher: "Животновская Оксана",
  },
  {
    day: 16,
    month: "ноября",
    lesson: "Скорочтение",
    time: "09:00-09:45",
    teacher: "Мин Елена",
  },
];
