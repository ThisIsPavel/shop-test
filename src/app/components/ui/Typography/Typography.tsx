import styles from "./styles.module.css";
import clsx from "clsx";
import TypographyProps from "./Typography.props";

export default function Typography({
  as: Tag = "p",
  variants,
  children,
  className,
  color,
  isPrice = false,
}: TypographyProps) {
  return (
    <Tag
      className={clsx(styles.text, className, {
        [styles.black]: color === "black",
        [styles.white]: color === "white",
        [styles.red]: color === "red",
        [styles.large]: variants === "large",
        [styles.medium]: variants === "medium",
        [styles.main]: variants === "main",
      })}
    >
      {children} {isPrice && "₽"}
    </Tag>
  );
}
