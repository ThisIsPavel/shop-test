import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IReviewData {
  id: number;
  text: string;
}

export default interface ReviewCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  data: IReviewData;
}
