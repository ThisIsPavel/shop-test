import Typography from "../ui/Typography/Typography";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Typography
        color="white"
        variants="large"
        as="h1"
        className={styles.title}
      >
        Тестовое задание
      </Typography>
    </header>
  );
}
