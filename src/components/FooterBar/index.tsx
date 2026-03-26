import "./index.scss";
import WindowsLogo from "../../assets/windows-icon.webp";
import { MenuWindows } from "../barMenu";
import { useEffect, useState } from "react";

export function FooterBar() {
  const [show, setShow] = useState<boolean>(false);
  const hourNow = new Date().getHours();
  const minutesNow = new Date().getMinutes();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleCloseMenu(event: any) {
      setShow(event.detail);
    }

    window.addEventListener("closeMenu", handleCloseMenu);
    return () => {
      window.removeEventListener("closeMenu", handleCloseMenu);
    };
  });
  return (
    <>
      <div className="menuWindos">
        <MenuWindows show={show} />
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
