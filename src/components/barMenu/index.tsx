import "./index.scss";
import type { IMenus } from "../../types/IMenus";
import windowsLogo from "../../assets/windows-icon.webp";
import cvIcon from "../../assets/menuIcons/cv.webp";
import myProjectsIcon from "../../assets/menuIcons/myprojects.webp";
import skillsIcon from "../../assets/desktopIcons/Skills.webp";
import contactsIcon from "../../assets/desktopIcons/contato.webp";
import entreEmContatoIcon from "../../assets/desktopIcons/entrecontato.webp";
import shutdownIcon from "../../assets/menuIcons/desligar.webp";
import restartIcon from "../../assets/menuIcons/restart.webp";
import { useNavigate } from "react-router-dom";

export function TopBarMenu({ position = "top" }: IMenus) {
  const navigate = useNavigate();
  return (
    <div>
      {position === "top" ? (
        <div className="topBarMenu">
          <img src={windowsLogo} alt="" />
          <p>Pablo Eduardo</p>
        </div>
      ) : (
        <div className="bottomBarMenu">
          <button className="exitAndRestartButtons">
            <img
              src={restartIcon}
              alt="Reiniciar o Computador"
              onClick={() => navigate("/")}
            />
            Reiniciar
          </button>
          <button
            className="exitAndRestartButtons"
            onClick={() => navigate("/")}
          >
            <img src={shutdownIcon} alt="Desligar o Computador" />
            Desligar
          </button>
        </div>
      )}
    </div>
  );
}

function closeMenuModal() {
  window.dispatchEvent(
    new CustomEvent("closeMenu", {
      detail: false,
    }),
  );
}

function openModalWindow(detailType: string) {
  window.dispatchEvent(
    new CustomEvent("openModal", {
      detail: `${detailType}`,
    }),
  );
}

export function CentralMenuWindows() {
  return (
    <>
      <div className="centralMenusContainer">
        <div className="centralMenuIcon">
          <img src={cvIcon} alt="Ícone Cúrriculo" />
          <div
            onClick={() => {
              openModalWindow("Meu Cúrriculo");
              closeMenuModal();
            }}
          >
            <p>Meu Cúrriculo</p>
            <span>Visualize ou faça o download do meu curriculo</span>
          </div>
        </div>
        <div className="centralMenuIcon">
          <img src={myProjectsIcon} alt="Meus Projetos" />
          <div>
            <p>Meus Projetos</p>
            <span>Visualize todos os meus projetos</span>
          </div>
        </div>
        <div className="centralMenuIcon">
          <img src={skillsIcon} alt="Minhas Habilidades" width={34} />
          <div
            onClick={() => {
              openModalWindow("Skills");
              closeMenuModal();
            }}
          >
            <p>Skills</p>
            <span>Visualize todas as minhas Soft's e Hard's Skills</span>
          </div>
        </div>
        <div className="centralMenuIcon">
          <img src={contactsIcon} alt="Meus Contatos" width={34} />
          <div>
            <p>Contato</p>
            <span>Visualize todos os meus contatos</span>
          </div>
        </div>
        <div className="centralMenuIcon">
          <img src={entreEmContatoIcon} alt="Entre em contato" width={34} />
          <div>
            <p>Entre em contato</p>
            <span>Me envie um e-mail</span>
          </div>
        </div>
      </div>
    </>
  );
}

export function MenuWindows({ show = false }: IMenus) {
  if (!show) return null;

  return (
    <div>
      <TopBarMenu position="top" />
      <CentralMenuWindows />
      <TopBarMenu position="down" />
    </div>
  );
}
