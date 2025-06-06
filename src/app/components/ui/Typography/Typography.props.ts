import { DetailedHTMLProps, HTMLAttributes } from "react";

type TextTags = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

export default interface TypographyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  as?: TextTags;
  children: React.ReactNode;
  color: "black" | "white" | "red";
  className?: string;
  variants: "large" | "medium" | "main";
  isPrice?:boolean
}
