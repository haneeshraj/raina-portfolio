import styles from "./styles.module.scss";
import clsx from "clsx";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function Button({ label, onClick, isActive }: ButtonProps) {
  return (
    <button
      className={clsx(styles["button"], isActive && styles["button--active"])}
      onClick={onClick}
    >
      <span className={styles["button__text"]}>{label}</span>

      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["button__icon"]}
      >
        <path
          d="M1 15L15 1M15 1H4.1505M15 1V11.8478"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
