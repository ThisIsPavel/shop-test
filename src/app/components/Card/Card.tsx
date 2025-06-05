"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import Typography from "../ui/Typography/Typography";
import Button from "../ui/Button/Button";
import Counter from "../Counter/Counter";
import { CardProps } from "./Card.props";
import placeholderImg from "@/../public/placeholder.webp";
import { observer } from "mobx-react-lite";
import { cartStore } from "@/stores/cartStore";

export default observer(function Card({ product }: CardProps) {
  const { description, image_url, price, title, id } = product;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image_url}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement;
            target.src = placeholderImg.src;
          }}
          alt="Изображение товара"
          fill
          unoptimized
        />
      </div>
      <div className={styles.cardContent}>
        <Typography color="black" variants="medium" className={styles.title}>
          {title}
        </Typography>
        <Typography color="black" variants="main">
          {description}
        </Typography>
      </div>
      <div className={styles.cardFooter}>
        <Typography color="black" variants="medium" className={styles.price}>
          цена: {price}P
        </Typography>
        {cartStore.hasProductinCart(id) ? (
          <Counter product={product} />
        ) : (
          <Button
            onClick={() => {
              cartStore.addItem(product);
            }}
          >
            Купить
          </Button>
        )}
      </div>
    </div>
  );
});
