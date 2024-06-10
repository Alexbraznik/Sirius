import React, { useState } from "react";
import styles from "./auth.module.scss";
import { AuthLogo } from "../../../shared";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { submitForm } from "../../../features/auth/store/authSlice";
import { FormGroup } from "./form-group";

interface IData {
  Email: string;
  password: string;
}

export const Auth: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = (data: IData) => {
    dispatch(submitForm(data));
  };

  return (
    <div className={styles.container}>
      <div className={styles.auth__container}>
        <AuthLogo className={styles.logo} />
        <h2>Вход в Sirius Future</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup
            passwordShown={passwordShown}
            togglePasswordVisibility={togglePasswordVisibility}
            register={register}
          />
          <div className={styles.rememberMe}>
            <input
              type="checkbox"
              id="rememberMe"
              className={styles.checkbox}
            />
            <label htmlFor="rememberMe" className={styles.label}>
              Запомнить меня
            </label>
          </div>
          <button type="submit">Войти</button>
        </form>
        <div className={styles.linksGroup}>
          <p>Я забыл пароль</p>
          <p>Войти как тренер</p>
        </div>
        <div className={styles.footer}>
          <p>Нет аккаунта?</p>
          <span>Зарегистрироваться</span>
        </div>
      </div>
      <div className={styles.lang}>
        <span className={styles.ru}>RU</span>
        <span className={styles.en}>EN</span>
      </div>
    </div>
  );
};
