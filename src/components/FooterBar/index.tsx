import "./index.scss";
import WindowsLogo from "../../assets/windows-icon.webp";
import { MenuWindows } from "../barMenu";
import { useState } from "react";

export function FooterBar() {
  const [show, setShow] = useState<boolean>(false);
  const hourNow = new Date().getHours();
  const minutesNow = new Date().getMinutes();
  return (
    <>
      <div className="menuWindos">
        <MenuWindows show={show}/>
      </div>
      <footer className="footerWindowsClassName">
        <div>
          <button className="buttonWindows" onClick={() => setShow(!show)}>
            <img src={WindowsLogo} alt="Menu Iniciar" /> Iniciar
          </button>
        </div>
        <div className="endBarFooter">
          {hourNow}:{minutesNow}
        </div>
      </footer>
    </>
  );
}
