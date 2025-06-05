import Input from "../Input/Input";
import Button from "../ui/Button/Button";
import styles from "./styles.module.css";
import { cartStore } from "@/stores/cartStore";
import { CardProps } from "./Counter.props";
import { ActionsUpdateQuantity } from "@/types/types";

export default function Counter({ product }: CardProps) {
  return (
    <div className={styles.counter}>
      <Button
        className={styles.button}
        onClick={() => {
          cartStore.updateCounter(product.id, ActionsUpdateQuantity.Decrement);
        }}
      >
        -
      </Button>
      <Input
        disabled
        className={styles.input}
        value={cartStore.getProductById(product.id).quantity}
      />
      <Button
        className={styles.button}
        onClick={() => {
          cartStore.updateCounter(product.id, ActionsUpdateQuantity.Increment);
        }}
      >
        +
      </Button>
    </div>
  );
}
