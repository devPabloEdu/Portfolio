import React, { useEffect, useState } from "react";
import "./index.scss";
import { Section } from "../../components/Section/index";
import { Container } from "../../components/Container/index";
import { ContentsIcon } from "../../components/ContentsIcon";
import cvIcon from "../../assets/desktopIcons/cv-icon-lg.webp";
import projectsIcon from "../../assets/desktopIcons/folder-docs-icon-lg.webp";
import skillsIcon from "../../assets/desktopIcons/Skills.webp";
import contatoIcon from "../../assets/desktopIcons/contato.webp";
import { FooterBar } from "../../components/FooterBar";
import entreEmContatoIcon from "../../assets/desktopIcons/entrecontato.webp";
import { Modal } from "../../components/Modal";
const HomePage = (): React.ReactElement => {
  const [modalType, setModalType] = useState<string>("");

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleOpenModal(event: any) {
      setModalType(event.detail);
    }

    window.addEventListener("openModal", handleOpenModal);
    return () => {
      window.removeEventListener("openModal", handleOpenModal);
    };
  });
  return (
    <Section className="sectionHomeClass">
      <Container className="parentGridContainer">
        <ContentsIcon
          imgSrc={cvIcon}
          imgAlternativeTitle="Meu Cúrriculo"
          id="content1"
          onClick={() => setModalType("Meu Cúrriculo")}
        >
          Meu Cúrriculo
        </ContentsIcon>
        <ContentsIcon
          imgSrc={projectsIcon}
          imgAlternativeTitle="Meus Projetos"
          id="content2"
        >
          Meus Projetos
        </ContentsIcon>
        <ContentsIcon
          imgSrc={skillsIcon}
          imgAlternativeTitle="Minhas Habilidades"
          id="content3"
          onClick={() => setModalType("Skills")}
        >
          Skills
        </ContentsIcon>
        <ContentsIcon
          imgSrc={contatoIcon}
          imgAlternativeTitle="Meios de Contato"
          id="content4"
        >
          Contato
        </ContentsIcon>
        <ContentsIcon
          imgSrc={entreEmContatoIcon}
          imgAlternativeTitle="Entre em contato"
          id="content5"
        >
          Entre em contato
        </ContentsIcon>
      </Container>
      <Container className="modalContainer">
        <Modal modalType={modalType} onClose={() => setModalType("")} />
      </Container>

      <FooterBar></FooterBar>
    </Section>
  );
};

export default HomePage;
