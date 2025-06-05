import { IOrderResponse, IProductResponse, IReviewResponse } from "@/types/api";
import { CartItem } from "@/types/types";
import axios, { AxiosInstance } from "axios";

class ApiService {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getReviews(): Promise<IReviewResponse[]> {
    try {
      const response = await this.api.get("/reviews");
      return await response.data;
    } catch (error) {
      console.error("Ошибка при получении отзывов:", error);
      throw error;
    }
  }

  async getProducts(page: number, pageSize: number): Promise<IProductResponse> {
    try {
      const response = await this.api.get("/products", {
        params: { page, page_size: pageSize },
      });
      return response.data;
    } catch (error) {
      console.error("Ошибка при получении продуктов:", error);
      throw error;
    }
  }

  async submitOrder(
    phone: string,
    cartItems: CartItem[]
  ): Promise<IOrderResponse> {
    try {
      const orderData = {
        phone,
        cart: cartItems.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      };

      const response = await this.api.post<IOrderResponse>("/order", orderData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data;
      }
      return {
        success: 0,
        error: "Произошла неизвестная ошибка",
      };
    }
  }
}

export const apiService = new ApiService();
