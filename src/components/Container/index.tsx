import "./index.scss";
import type { IContainer } from "../../types/IContainer";

export function Container({ children, className = "", id = "" }: IContainer) {
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
}
