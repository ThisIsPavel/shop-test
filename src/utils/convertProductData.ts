import { CartItem, IProduct } from "@/types/types";

export default function converterProductData({
  ...product
}: IProduct): CartItem {
  return {
    id: product.id,
    quantity: 1,
    price: product.price,
    title: product.title,
  };
}
