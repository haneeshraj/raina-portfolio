import styles from "./styles.module.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button className={styles["button"]} onClick={onClick}>
      <span className={styles["button__text"]}>{label}</span>

      <span>
        <svg
          width="16"
          height="16"
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
      </span>
    </button>
  );
}
