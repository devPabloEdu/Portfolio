import "./index.scss";
import type { IContentIcons } from "../../types/IContentIcons";

export function ContentsIcon({children, imgAlternativeTitle = '', imgSrc = '', id = ''}: IContentIcons) {
  return (
    <div className="DesktopIcons" id={id}>
      <img src={imgSrc} alt={imgAlternativeTitle} />
      <p>{children}</p>
    </div>
  );
}
