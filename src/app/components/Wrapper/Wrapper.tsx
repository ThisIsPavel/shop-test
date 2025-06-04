import styles from "./styles.module.css";
import WrapperProps from "./Wrapper.props";

export default function Wrapper({ children }: WrapperProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
