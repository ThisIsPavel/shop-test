export interface CartItem {
  id: number;
  quantity: number;
  price: number;
  title: string;
}

export interface IProduct {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
}

export enum ActionsUpdateQuantity {
  Increment = "increment",
  Decrement = "decrement",
}
