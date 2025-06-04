import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface WrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: React.ReactNode;
}
