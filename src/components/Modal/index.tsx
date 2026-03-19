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

function TopBarModal({ topMenuName = "" }: IModal) {
  return (
    <>
      <div className="topBarModal">
        <h2>{topMenuName}</h2>

        <div className="buttonsContainerModal">
          <button>_</button>
          <button id="closeButton">X</button>
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
    case "cv":
      return (
        <div className="cvBodyContainer">
          <div className="myInfos">
            <img src={profileImage} alt="Pablo Eduardo" width={120} />
            <p>
              Pablo Eduardo
              <br />
              Desenvolvedor Full-stack
              <br />
              São Paulo, Brasil
            </p>
            <p>
              15/05/2002
              <br />
              11 9-3099-9643
              <br />
              eduardopablo460@gmail.com
            </p>
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
                <SiRabbitmq size={34}/>
                <FaGitSquare size={34}/>
                <VscAzure size={34}/>
            </div>
          </div>
          <div className='EducationInfos'>
            <h2>Educação</h2>
            <div>
                
            </div>
          </div>
          </div>
        </div>
      );
  }
}

export function Modal() {
  return (
    <div>
      <TopBarModal topMenuName="teste" />
      {ModalBody("cv")}
    </div>
  );
}
