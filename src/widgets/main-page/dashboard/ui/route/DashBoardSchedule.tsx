import styles from "./dashboard.module.scss";
import { Schedule } from "../";

export const DashBoardSchedule: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <Schedule />
    </div>
  );
};
