import { apiService } from "@/api/apiService";
import CheckoutSummary from "./components/CheckoutSummary/CheckoutSummary";
import ReviewCard from "./components/ReviewCard/ReviewCard";
import styles from "./page.module.css";
import InfiniteScrollWrapper from "./components/InfiniteScrollWrapper/InfiniteScrollWrapper";
import { CURRENT_PAGE, PAGE_SIZE } from "@/constants/constant";

export default async function Home() {
  const reviews = await apiService.getReviews();
  const products = await apiService.getProducts(CURRENT_PAGE, PAGE_SIZE);
  return (
    <main className={styles.main}>
      <section className={styles.reviewList}>
        {reviews.map((review) => (
          <ReviewCard data={review} key={review.id} />
        ))}
      </section>
      <section className={styles.checkoutSummary}>
        <CheckoutSummary />
      </section>
      <section className={styles.cards}>
        <InfiniteScrollWrapper initialProducts={products.items} />
      </section>
    </main>
  );
}
