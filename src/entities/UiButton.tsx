import clsx from "clsx";
import styles from "./UiButton.module.scss";

interface UiButtonProps {
  className?: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
}

export function UiButton({
  className,
  variant,
  children,
  onClick,
}: UiButtonProps) {
  const buttonClassName = clsx(
    styles.transitionColors,
    className,
    variant === "primary" && styles.btn1,
    variant === "secondary" && styles.btn2
  );

  return (
    <button onClick={onClick} className={`${buttonClassName} ${styles.button}`}>
      {children}
    </button>
  );
}
