import { Provider } from "react-redux";
import "../styles/global.css";
import store from "../src/features/auth/store/authStore";

export default function App({ Component, pageProps }) {
  // http://localhost:3000 - Главная страница
  // http://localhost:3000/auth - Страница с регистрацией(можно перейти по кнопке "выход" в профиле)
  // http://localhost:3000/schedule - Страница с расписанием(можно перейти в навигационном меню слева)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
