import { IProduct } from "./types";

export interface IReviewResponse {
  id: number;
  text: string;
}

export interface IProductResponse {
  page: number;
  amount: number;
  total: number;
  items: IProduct[];
}

export interface IOrderResponse {
  success: number;
  error?: string;
}
