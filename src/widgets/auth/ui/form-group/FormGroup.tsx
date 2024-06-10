import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "./formGroup.module.scss";

interface IFormGroupProps {
  passwordShown: boolean;
  togglePasswordVisibility: () => void;
  register: any;
}

export const FormGroup: React.FC<IFormGroupProps> = ({
  passwordShown,
  togglePasswordVisibility,
  register,
}) => {
  return (
    <div className={styles.inputGroup}>
      <input
        type="text"
        placeholder="E-mail"
        defaultValue="test@mail.ru"
        {...register("Email")}
      />
      <div className={styles.passwordWrapper}>
        <input
          type={passwordShown ? "text" : "password"}
          placeholder="Пароль"
          className={styles.input}
          defaultValue="12345"
          {...register("password")}
        />
        <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
          <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} />
        </span>
      </div>
    </div>
  );
};
