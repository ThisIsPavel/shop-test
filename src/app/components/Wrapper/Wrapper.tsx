"use client";

import { modalStore } from "@/stores/modalStore";
import styles from "./styles.module.css";
import WrapperProps from "./Wrapper.props";
import OrderModalSuccess from "../OrderModalSuccess/OrderModalSuccess";
import { observer } from "mobx-react-lite";

export default observer(function Wrapper({ children }: WrapperProps) {
  return (
    <>
      {modalStore.isOrderModalOpen && <OrderModalSuccess />}
      <div className={styles.wrapper}>{children}</div>
    </>
  );
});
