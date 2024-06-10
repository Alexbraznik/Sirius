import styles from "./schedule.module.scss";
import { Header, Nav } from "../../src/widgets/main-page";
import { DashBoardSchedule } from "../../src/widgets/main-page/dashboard/ui";

export default function Schedule(): JSX.Element {
  return (
    <div className={styles.container}>
      <Nav />
      <div>
        <Header />
        <DashBoardSchedule />
      </div>
    </div>
  );
}
