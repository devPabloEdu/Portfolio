import "./index.scss";
import type { ISection } from "../../types/ISection";

export function Section({ className = "", id = "", children }: ISection) {
  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
}
