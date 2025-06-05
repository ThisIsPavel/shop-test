import clsx from "clsx";
import InputProps from "./Input.props";
import styles from "./styles.module.css";

export default function Input({ className, ...props }: InputProps) {
  return <input className={clsx(styles.input, className)} {...props} />;
}
