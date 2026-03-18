import React, { useEffect } from "react";
import "./index.scss";
import { Section } from "../../components/Section";
import bootImage from "../../assets/background/bootimagem.webp";
import { useNavigate } from "react-router-dom";
const BootPage = (): React.ReactElement => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Section className="BootSectionContainer">
      <img src={bootImage} alt="Logo windows xp" />
      <div className="progressBarLoading">
        <span>...</span>
        <span>...</span>
        <span>...</span>
      </div>
    </Section>
  );
};

export default BootPage;
