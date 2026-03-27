import "./index.scss";
import type { IModal } from "../../types/IModal";
import windowsIcon from "../../assets/windows-icon.webp";
import profileImage from "../../assets/modalImages/profile.png";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { SiRabbitmq } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { FaComputer } from "react-icons/fa6";
import { ProjectsContent } from "../projectsContent";
import { BsTypescript } from "react-icons/bs";
import CedecaImage from "../../assets/projectsImages/cedecaImage.jfif";
import registroDePontosImage from "../../assets/projectsImages/registroPontos.png";
import { FaDocker } from "react-icons/fa";
import barbeariaImage from "../../assets/projectsImages/barbearia.png";
import { useState } from "react";

function TopBarModal({ topMenuName = "", onClose }: IModal) {
  return (
    <>
      <div className="topBarModal">
        <h2>{topMenuName}</h2>

        <div className="buttonsContainerModal">
          <button>_</button>
          <button id="closeButton" onClick={onClose}>
            X
          </button>
        </div>
      </div>
      <div className="aboveTopBarModal">
        <div className="linksAboveModalList">
          <a href="#">File</a>
          <a href="#">Edit</a>
          <a href="#">View</a>
          <a href="#">Help</a>
        </div>
        <img src={windowsIcon} alt="" />
      </div>
    </>
  );
}

function ModalBody({ type }: { type: string }) {
  const [name, setName]= useState("");
  const [contact, setContact]= useState<string>("");
  const [about, setAbout]= useState<string>("");
  const [text, setText] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function teste(e: any) {
    e.preventDefault();

    alert(
      `nome : ${name} contato : ${contact} about : ${about} text : ${text}`
    )
  }


  switch (type) {
    case "Meu Cúrriculo":
      return (
        <div className="cvBodyContainer">
          <div className="myInfos">
            <img src={profileImage} alt="Pablo Eduardo" width={120} />
            <div>
              <p>Pablo Eduardo</p>
              <p> São Paulo, Brasil</p>
              <p>Desenvolvedor Full-stack</p>
              <p>eduardopablo460@gmail.com</p>
              <p>15/05/2002</p>
              <p> 11 9-3099-9643</p>
            </div>
          </div>

          <div className="infosConhecimentos">
            <div className="brainInfos">
              <h2>Conhecimentos</h2>
              <h3>Front-End</h3>
              <div>
                <FaHtml5 size={34} />
                <FaCss3Alt size={34} />
                <IoLogoJavascript size={34} />
                <FaReact size={34} />
                <BsTypescript size={34} />
              </div>
              <h3>Backend</h3>
              <div>
                <FaNodeJs size={34} />
                <FaPython size={34} />
                <BsFiletypeSql size={34} />
                <BiLogoPostgresql size={34} />
                <TbBrandCSharp size={34} />
                <BsTypescript size={34} />
              </div>
              <h3>Outros</h3>
              <div>
                <SiRabbitmq size={34} />
                <FaGitSquare size={34} />
                <VscAzure size={34} />
                <FaDocker size={34} />
              </div>
            </div>
            <div className="EducationInfos">
              <h2>Experiências</h2>
              <div>
                <h3>Analista Programador Junior</h3>
                <p>03/2026 - emprego atual</p>
                <p>Liberum Ratings</p>
                <p> São Paulo, Brasil</p>
                <p>
                  <IoLogoJavascript size={20} />
                  <FaReact size={20} />
                  <FaNodeJs size={20} />
                  <FaPython size={20} />
                  <BiLogoPostgresql size={20} />
                  <SiRabbitmq size={20} />
                  <FaGitSquare size={20} />
                  <VscAzure size={20} />
                  <BsTypescript size={20} />
                  <FaDocker size={20} />
                </p>
              </div>
              <div>
                <h3>Estágio em Desenvolvimento de Software</h3>
                <p>03/2025 - 03/2026</p>
                <p>Liberum Ratings</p>
                <p> São Paulo, Brasil</p>
                <p>
                  <IoLogoJavascript size={20} />
                  <FaReact size={20} />
                  <FaNodeJs size={20} />
                  <FaPython size={20} />
                  <BiLogoPostgresql size={20} />
                  <SiRabbitmq size={20} />
                  <FaGitSquare size={20} />
                  <VscAzure size={20} />
                  <BsTypescript size={20} />
                  <FaDocker size={20} />
                </p>
              </div>
              <div>
                <h3>Desenvolvedor - Freelancer</h3>
                <p>01/2024 - 03/2025</p>
                <p> São Paulo, Brasil</p>
                <p>
                  <IoLogoJavascript size={20} />
                  <FaReact size={20} />
                  <FaNodeJs size={20} />
                  <FaPython size={20} />
                  <BiLogoPostgresql size={20} />
                  <FaGitSquare size={20} />
                  <TbBrandCSharp size={20} />
                  <BsTypescript size={20} />
                  <FaDocker size={20} />
                </p>
              </div>
              <div>
                <h3>Desenvolvedor Voluntário</h3>
                <p>11/2024 - 01/2025</p>
                <p>Osasco, São Paulo, Brasil</p>
                <p>Cedeca - centro de defesa da criança e do adolescente</p>
                <p>
                  <IoLogoJavascript size={20} />
                  <FaReact size={20} />
                  <BiLogoPostgresql size={20} />
                  <FaGitSquare size={20} />
                  <TbBrandCSharp size={20} />
                  <BsTypescript size={20} />
                </p>
              </div>
              <div>
                <h3>Suporte a Software</h3>
                <p>06/2024 - 01/2025</p>
                <p>Barueri, São Paulo, Brasil</p>
                <p>MUBI - Sistemas de gestão</p>
              </div>

              <h2>Educação</h2>
              <div>
                <h3>Análise e Desenvolvimento de sistemas - Estácio de Sá</h3>
                <p>01/2024 - 06/2026</p>
              </div>
            </div>
          </div>
        </div>
      );
    case "Skills":
      return (
        <div className="SkillsBodyContainer">
          <div className="MySkillsInfo">
            <h2>
              <FaComputer size={36} /> Minhas Habilidades
            </h2>
            <div className="areaSkills">
              <div>
                <h3>Front-End</h3>
                <div>
                  <FaHtml5 size={34} />
                  <FaCss3Alt size={34} />
                  <IoLogoJavascript size={34} />
                  <FaReact size={34} />
                  <BsTypescript size={34} />
                </div>
              </div>
              <div>
                <h3>Backend</h3>
                <div>
                  <FaNodeJs size={34} />
                  <FaPython size={34} />
                  <BsFiletypeSql size={34} />
                  <BiLogoPostgresql size={34} />
                  <TbBrandCSharp size={34} />
                  <BsTypescript size={34} />
                </div>
              </div>
              <div>
                <h3>Outros</h3>
                <div>
                  <SiRabbitmq size={34} />
                  <FaGitSquare size={34} />
                  <VscAzure size={34} />
                  <FaDocker size={34} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "Meus Projetos":
      return (
        <div className="myProjectsContainer">
          <h2>Meus Projetos</h2>
          <div className="projectsContent">
            <ProjectsContent
              projectName="Sistema de Registro de pontos"
              projectDescription="Com a interface simples, o usuário pode facilmente registrar ou excluir seus pontos, visualizar os horários registrados e receber feedback em tempo real sobre suas ações."
              ProjectAcessUrl="https://github.com/devPabloEdu/Hora-Certa---Sistema-de-registro-de-pontos"
              ProjectYear="2024/2025"
              projectImageUrl={registroDePontosImage}
            >
              <TbBrandCSharp size={30} />
              <BsTypescript size={30} />
              <FaReact size={30} />
              <BsFiletypeSql size={30} />
            </ProjectsContent>
            <ProjectsContent
              projectName="Cedeca Osasco - Institucional"
              projectDescription="Desenvolvi um site completo, com noticias, autenticação, publicações e informações sobre uma ONG que atua na região de Osasco oferecendo suporte a crianças em situação de vulnerabilidade social, adultos, e atendimentos psicológicos e psicopedagógicos, entre outros serviços essenciais."
              ProjectAcessUrl="https://github.com/devPabloEdu/Projeto-Cedeca-Osasco"
              ProjectYear="2024"
              projectImageUrl={CedecaImage}
            >
              <TbBrandCSharp size={30} />
              <BsTypescript size={30} />
              <FaReact size={30} />
              <BsFiletypeSql size={30} />
            </ProjectsContent>
            <ProjectsContent
              projectName="Landing page Barbearia - meu 1º projeto"
              projectDescription="Desenvolvi um site para um empreendedor da minha região, com o objetivo de divulgar seu
              trabalho e atuar como um sistema de agendamentos. Criei um sistema de agendamentos
              via SMTP utilizando o framework Express.js, onde o usuário pode informar seu nome,
              endereço, o serviço desejado, além de escolher o dia e a hora, feito isso, o agendamento é
              enviado ao e-mail pessoal do empreendedor."
              ProjectAcessUrl="https://github.com/devPabloEdu/AndradeBarbearia"
              ProjectYear="2023/2024"
              projectImageUrl={barbeariaImage}
            >
              <BsTypescript size={30} />
              <FaReact size={30} />
              <FaCss3Alt size={34} />
            </ProjectsContent>
          </div>
        </div>
      );
    case "Entre Em Contato":
      return (
        <div className="formContainer">
          <form onSubmit={teste}>
            <div className="formEmailContainerHeader">
              <div>
                <p>Seu Nome: </p>
                <input type="text" placeholder="Seu nome" onChange={(e) => setName(e.target.value)}/>
                <p>Seu contato:</p>
                <input type="text" placeholder="Seu e-mail ou contato" onChange={(e) => setContact(e.target.value)}/>
                <p>Assunto:</p>
                <input type="text" placeholder="Assunto do e-mail" onChange={(e) => setAbout(e.target.value)}/>
              </div>
            </div>
            <textarea placeholder="Insira sua mensagem aqui" onChange={(e) => setText(e.target.value)}></textarea>
            <div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      );
  }
}

export function Modal({ modalType = "", onClose }: IModal) {
  if (!modalType || modalType === "") return null;
  return (
    <div className="modalClass">
      <TopBarModal topMenuName={modalType} onClose={onClose} />
      <ModalBody type={modalType} />
    </div>
  );
}
