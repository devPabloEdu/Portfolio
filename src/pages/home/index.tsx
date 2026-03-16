import React from "react";
import "./index.scss";
import { Section } from "../../components/Section/index";
import { Container } from "../../components/Container/index";
import { ContentsIcon } from "../../components/ContentsIcon";
import cvIcon from '../../assets/desktopIcons/cv-icon-lg.webp';
import projectsIcon from '../../assets/desktopIcons/folder-docs-icon-lg.webp';
import skillsIcon from '../../assets/desktopIcons/Skills.webp';
import contatoIcon from '../../assets/desktopIcons/contato.webp';
import { FooterBar } from "../../components/FooterBar";

const HomePage = (): React.ReactElement => {
  return (
    <Section className="sectionHomeClass">
      <Container className="parentGridContainer">
        <ContentsIcon imgSrc={cvIcon} imgAlternativeTitle="Meu Cúrriculo" id="content1">
          Meu Cúrriculo
        </ContentsIcon>
        <ContentsIcon imgSrc={projectsIcon} imgAlternativeTitle="Meus Projetos" id="content2">
            Meus Projetos
        </ContentsIcon>
        <ContentsIcon imgSrc={skillsIcon} imgAlternativeTitle="Minhas Habilidades" id="content3">
            Skills
        </ContentsIcon>
        <ContentsIcon imgSrc={contatoIcon} imgAlternativeTitle="Meios de Contato" id="content4">
            Contato
        </ContentsIcon>
      </Container>
 
        <FooterBar>         
        </FooterBar>
    </Section>
  );
};

export default HomePage;
