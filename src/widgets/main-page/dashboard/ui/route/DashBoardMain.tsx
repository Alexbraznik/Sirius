import styles from "./dashboard.module.scss";
import { SectionBottom, SectionTop } from "../";

export const DashBoardMain: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <SectionTop />
      <SectionBottom />
    </div>
  );
};
