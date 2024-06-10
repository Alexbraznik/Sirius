import { Header, Nav } from "../../src/widgets/main-page";
import { DashBoardMain } from "../../src/widgets/main-page/dashboard/ui";
import styles from "./MainPage.module.scss";

export default function MainPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <Nav />
      <div>
        <Header />
        <DashBoardMain />
      </div>
    </div>
  );
}
