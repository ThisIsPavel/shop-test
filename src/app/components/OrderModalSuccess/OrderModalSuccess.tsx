import { modalStore } from "@/stores/modalStore";
import Button from "../ui/Button/Button";
import Typography from "../ui/Typography/Typography";
import styles from "./styles.module.css";

export default function OrderModalSuccess() {
  return (
    <div className={styles.mask}>
      <div className={styles.modal}>
        <Typography color="black" variants="medium">
          Заказ отправлен!
        </Typography>
        <Button onClick={() => modalStore.setIsOpenOrderModal(false)}>
          Закрыть
        </Button>
      </div>
    </div>
  );
}
