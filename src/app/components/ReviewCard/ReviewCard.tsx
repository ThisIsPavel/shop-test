import extractContent from "@/utils/extractContent";
import Typography from "../ui/Typography/Typography";
import ReviewCardProps from "./ReviewCard.props";
import styles from "./styles.module.css";

export default function ReviewCard({ data }: ReviewCardProps) {
  const part = extractContent(data.text);

  return (
    <div className={styles.ReviewCard}>
      <div className={styles.Review}>
        <Typography color="black" variants="main">
          Отзыв {data.id}
        </Typography>
        <Typography color="black" variants="main">
          {part.h1}
        </Typography>
        <Typography color="black" variants="main">
          {part.p}
        </Typography>
      </div>
    </div>
  );
}
