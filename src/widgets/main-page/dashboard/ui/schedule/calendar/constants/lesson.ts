// |
// |
// |
// |
// |
// ==================ПРИШЛОСЬ ХАРДКОДИТЬ, НУЖНО БОЛЬШЕ СВЕДЕНИЙ О ПРОЕКТЕ==================

interface ILessonList {
  id: number;
  time: string;
  title: string;
  borderGreen?: boolean;
  borderViolet?: boolean;
  borderBlack?: boolean;
  borderRed?: boolean;
  crossed?: boolean;
  wallet?: boolean;
  bgcViolet?: boolean;
  bgcGray?: boolean;
  bgcGreen?: boolean;
}

export const lessonList: ILessonList[] = [
  {
    id: 2,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    borderGreen: true,
  },
  {
    id: 2,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    borderViolet: true,
    borderGreen: true,
  },
  {
    id: 3,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    borderBlack: true,
    borderGreen: true,
    crossed: true,
  },
  {
    id: 3,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    borderViolet: true,
    borderBlack: true,
    crossed: true,
  },
  {
    id: 4,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    borderRed: true,
    wallet: true,
  },
  {
    id: 4,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    borderViolet: true,
    borderRed: true,
    wallet: true,
  },
  {
    id: 5,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    bgcViolet: true,
  },
  { id: 5, time: "13:00-13:45", title: "Ментальная арифметика", bgcGray: true },
  {
    id: 6,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    wallet: true,
    borderGreen: true,
    bgcGreen: true,
  },
  {
    id: 6,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    wallet: true,
    borderGreen: true,
    bgcGreen: true,
  },
  {
    id: 7,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    borderGreen: true,
    bgcGreen: true,
  },
  {
    id: 7,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    borderViolet: true,
    borderGreen: true,
    bgcGreen: true,
  },
  {
    id: 8,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    wallet: true,
    borderGreen: true,
    bgcGreen: true,
  },
  {
    id: 10,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    wallet: true,
    borderGreen: true,
    bgcGreen: true,
  },
  {
    id: 12,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    wallet: true,
    borderGreen: true,
    bgcGreen: true,
  },
  {
    id: 18,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    wallet: true,
    borderGreen: true,
    bgcGreen: true,
  },
  {
    id: 20,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    wallet: true,
    borderGreen: true,
    bgcGreen: true,
  },
  {
    id: 22,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    wallet: true,
    borderGreen: true,
    bgcGreen: true,
  },
  {
    id: 22,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    wallet: true,
    borderGreen: true,
    bgcGreen: true,
  },
  {
    id: 27,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    wallet: true,
    borderGreen: true,
    bgcGreen: true,
  },
  {
    id: 35,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    wallet: true,
    borderGreen: true,
    bgcGreen: true,
  },
  {
    id: 35,
    time: "13:00-13:45",
    title: "Ментальная арифметика",
    wallet: true,
    borderGreen: true,
    bgcGreen: true,
  },
];
