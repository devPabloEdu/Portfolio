import "./index.scss";
import type { IMenus } from "../../types/IMenus";
import windowsLogo from "../../assets/windows-icon.webp";
import cvIcon from "../../assets/menuIcons/cv.webp";
export function TopBarMenu({ position = "top" }: IMenus) {
  return (
    <div>
      {position === "top" ? (
        <div className="topBarMenu">
          <img src={windowsLogo} alt="" />
          <p>Pablo Eduardo</p>
        </div>
      ) : (
        <div>down</div>
      )}
    </div>
  );
}

export function CentralMenuWindows() {
  return (
    <div className="centralMenusContainer">
      <div className="centralMenuIcon">
        <img src={cvIcon} alt="Ícone Cúrriculo" />
        <div>
          <p>Meu Cúrriculo</p>
          <span>Visualize ou faça o download do meu curriculo</span>
        </div>
      </div>
      <div className="centralMenuIcon">
        <img src={cvIcon} alt="Meus Projetos" />
        <div>
          <p>Meus Projetos</p>
          <span>Visualize todos os meus projetos</span>
        </div>
      </div>
      <div className="centralMenuIcon">
        <img src={cvIcon} alt="Meus Projetos" />
        <div>
          <p>Skills</p>
          <span>Visualize todas as minhas Soft's e Hard's Skills</span>
        </div>
      </div>
      <div className="centralMenuIcon">
        <img src={cvIcon} alt="Meus Projetos" />
        <div>
          <p>Contato</p>
          <span>Visualize todos os meus contatos</span>
        </div>
      </div>
      <div className="centralMenuIcon">
        <img src={cvIcon} alt="Meus Projetos" />
        <div>
          <p>Entre em contato</p>
          <span>Me envie um e-mail</span>
        </div>
      </div>
    </div>
  );
}

export function MenuWindows({ show = false }: IMenus) {
  if (!show) return null;

  return (
    <div>
      <TopBarMenu position="top" />
      <CentralMenuWindows />
    </div>
  );
}
