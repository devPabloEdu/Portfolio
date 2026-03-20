import React from "react";
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

function TopBarModal({ topMenuName = "", onClose }: IModal) {
  return (
    <>
      <div className="topBarModal">
        <h2>{topMenuName}</h2>

        <div className="buttonsContainerModal">
          <button>_</button>
          <button id="closeButton" onClick={onClose}>X</button>
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

function ModalBody(type: string) {
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
              </div>
              <h3>Backend</h3>
              <div>
                <FaNodeJs size={34} />
                <FaPython size={34} />
                <BsFiletypeSql size={34} />
                <BiLogoPostgresql size={34} />
                <TbBrandCSharp size={34} />
              </div>
              <h3>Outros</h3>
              <div>
                <SiRabbitmq size={34} />
                <FaGitSquare size={34} />
                <VscAzure size={34} />
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
  }
}

export function Modal({modalType = '', onClose} : IModal) {
  if (!modalType || modalType === '') return null;
  return (
    <div>
      <TopBarModal topMenuName={modalType} onClose={onClose}/>
      {ModalBody(modalType)}
    </div>
  );
}
