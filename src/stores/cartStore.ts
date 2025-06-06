import { ActionsUpdateQuantity, CartItem, IProduct } from "@/types/types";
import converterProductData from "@/utils/convertProductData";
import { makeAutoObservable } from "mobx";

class CartStore {
  cartItems: CartItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  hasProductinCart(id: number): boolean {
    return this.cartItems.some((i) => i.id === id);
  }

  getProductById(id: number): CartItem {
    return this.cartItems.find((i) => i.id === id)!;
  }

  removeProduct(id: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    this.saveToLocalStorage();
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem("cart");
    if (data) {
      const parsed: CartItem[] = JSON.parse(data);
      this.cartItems = parsed;
    }
  }

  saveToLocalStorage() {
    console.log(this.cartItems);
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
  }

  addItem(item: IProduct) {
    const cartItem = converterProductData(item);
    const existingItem = this.cartItems.find((i) => i.id === cartItem.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...cartItem });
    }
    this.saveToLocalStorage();
  }

  updateCounter(id: number, action: ActionsUpdateQuantity) {
    if (action === ActionsUpdateQuantity.Decrement) {
      const existingItem = this.getProductById(id);
      if (existingItem && existingItem.quantity === 1) {
        this.removeProduct(id);
        return;
      }
    }
    this.cartItems = this.cartItems.map((item) => {
      if (id === item.id) {
        switch (action) {
          case ActionsUpdateQuantity.Increment:
            return { ...item, quantity: item.quantity + 1 };
          case ActionsUpdateQuantity.Decrement:
            return { ...item, quantity: Math.max(1, item.quantity - 1) };
          default:
            break;
        }
      }
      return item;
    });
    this.saveToLocalStorage();
  }

  setQuantity(id: number, quantity: number) {
    if (quantity < 1) quantity = 1;
    const existingItem = this.getProductById(id);
    if (existingItem) {
      existingItem.quantity = quantity;
      this.saveToLocalStorage();
    }
  }
  resetCart() {
    if (this.cartItems.length > 0) {
      this.cartItems = [];
      this.saveToLocalStorage();
    }
  }
}

export const cartStore = new CartStore();
