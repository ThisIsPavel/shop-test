import clsx from "clsx";
import ButtonProps from "./Button.props";
import styles from "./styles.module.css";

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  );
}
