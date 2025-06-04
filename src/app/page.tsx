import ReviewCard from "./components/ReviewCard/ReviewCard";
import styles from "./page.module.css";

const moc = [
  {
    id: 1,
    text: "<h1>something</h1><p>jiofewjf wefofwejoifewoi</p>",
  },
  {
    id: 2,
    text: "<h1>somethsing</h1><p>jiofewjf oi</p>",
  },
  {
    id: 3,
    text: "<h1>somethiasdsang</h1><p>jiofewjf weasdasdas asdasd asd sfofwejoifewoi</p>",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.reviewList}>
        {moc.map((review) => (
          <ReviewCard data={review} key={review.id} />
        ))}
      </section>
      <section className={styles.checkoutSummary}></section>
    </main>
  );
}
