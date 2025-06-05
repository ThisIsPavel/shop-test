"use client";

import { useEffect, useState, useRef } from "react";
import { apiService } from "@/api/apiService";
import Card from "../Card/Card";
import { infinitiScrollProps } from "./InfiniteScrollWrapper.props";
import { CURRENT_PAGE } from "@/constants/constant";

export default function InfiniteScrollWrapper({
  initialProducts,
}: infinitiScrollProps) {
  const [products, setProducts] = useState(initialProducts);
  const [page, setPage] = useState(CURRENT_PAGE + 1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        console.log(entries);
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setIsLoading(true);
          try {
            const newProducts = await apiService.getProducts(page, 10);
            if (newProducts.items.length === 0) {
              setHasMore(false);
            } else {
              setProducts((prev) => [...prev, ...newProducts.items]);
              setPage((prev) => prev + 1);
            }
          } catch (error) {
            console.error("Error loading more products:", error);
          } finally {
            setIsLoading(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [page, hasMore, isLoading]);

  return (
    <>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
      {hasMore && (
        <div ref={loaderRef}>{isLoading && <div>Загрузка...</div>}</div>
      )}
    </>
  );
}
