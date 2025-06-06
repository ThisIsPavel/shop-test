"use client";

import React, { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import Typography from "../ui/Typography/Typography";
import styles from "./styles.module.css";
import Input from "../Input/Input";
import formatterPhoneNumber from "@/utils/formatterPhoneNumber";
import { observer } from "mobx-react-lite";
import { cartStore } from "@/stores/cartStore";
import { apiService } from "@/api/apiService";
import { modalStore } from "@/stores/modalStore";

export default observer(function CheckoutSummary() {
  const [phone, setPhone] = useState("");
  const [orderMessage, setOrderMessage] = useState<string>();
  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "");
    setPhone(formatterPhoneNumber(input));
  };

  const handleSubmitOrder = async () => {
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 11) {
      setOrderMessage("Введите корректный номер телефона");
      return;
    }
    const response = await apiService.submitOrder(
      cleanPhone,
      cartStore.cartItems
    );
    if (response.success === 1) {
      modalStore.setIsOpenOrderModal(true);
      cartStore.resetCart();
      localStorage.setItem("phone", phone);
    }
    setOrderMessage(response?.error);
  };

  const handleRemovePhone = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && phone === "+7") {
      localStorage.removeItem("phone");
      setPhone("");
      e.preventDefault();
    }
  };

  useEffect(() => {
    cartStore.loadFromLocalStorage();
    const phone = localStorage.getItem("phone");
    if (phone) {
      setPhone(phone);
    }
  }, []);

  return (
    <div className={styles.checkoutSummary}>
      <Typography color="black" variants="medium" className={styles.title}>
        Добавленные товары
      </Typography>
      {cartStore.cartItems.length === 0 && (
        <Typography color="black" variants="main">
          Корзина пустая
        </Typography>
      )}
      <table className={styles.table}>
        <tbody>
          {cartStore.cartItems.map((product) => (
            <tr key={product.id} className={styles.row}>
              <td className={styles.item}>
                <Typography color="black" variants="main">
                  {product.title}
                </Typography>
              </td>
              <td className={styles.quantity}>
                <Typography color="black" variants="main">
                  x{product.quantity}
                </Typography>
              </td>
              <td className={styles.price}>
                <Typography color="black" variants="main" isPrice>
                  {product.price * product.quantity}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.actions}>
        <Input
          className={styles.input}
          type="tel"
          value={phone}
          onChange={handleChangePhone}
          placeholder="+7 (___) ___ __-__"
          onKeyDown={handleRemovePhone}
        />
        <Button onClick={handleSubmitOrder} className={styles.orderButton}>
          Заказать
        </Button>
      </div>
      {orderMessage && (
        <Typography color="red" variants="main">
          {orderMessage}
        </Typography>
      )}
    </div>
  );
});
