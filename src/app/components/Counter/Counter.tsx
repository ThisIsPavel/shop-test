"use client";

import Input from "../Input/Input";
import Button from "../ui/Button/Button";
import styles from "./styles.module.css";
import { cartStore } from "@/stores/cartStore";
import { CardProps } from "./Counter.props";
import { ActionsUpdateQuantity } from "@/types/types";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

export default observer(function Counter({ product }: CardProps) {
  const currentItem = cartStore.getProductById(product.id);
  const [inputValue, setInputValue] = useState(currentItem.quantity.toString());

  // Синхронизируем значение, если оно изменилось извне (например, через кнопки +/-)
  useEffect(() => {
    setInputValue(currentItem.quantity.toString());
  }, [currentItem.quantity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Разрешаем только цифры и непустую строку
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const applyNewQuantity = () => {
    let numValue = parseInt(inputValue, 10);
    if (isNaN(numValue) || numValue < 1) {
      numValue = 1; // Минимальное значение = 1
    }
    cartStore.setQuantity(product.id, numValue);
    setInputValue(numValue.toString()); // Нормализуем значение
  };

  return (
    <div className={styles.counter}>
      <Button
        className={styles.button}
        onClick={() =>
          cartStore.updateCounter(product.id, ActionsUpdateQuantity.Decrement)
        }
      >
        -
      </Button>

      <Input
        className={styles.input}
        value={inputValue}
        onChange={handleChange}
        onBlur={applyNewQuantity}
        onKeyDown={(e) => e.key === "Enter" && applyNewQuantity()}
      />

      <Button
        className={styles.button}
        onClick={() =>
          cartStore.updateCounter(product.id, ActionsUpdateQuantity.Increment)
        }
      >
        +
      </Button>
    </div>
  );
});
