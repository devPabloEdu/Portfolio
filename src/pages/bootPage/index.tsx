import React, { useEffect } from "react";
import "./index.scss";
import { Section } from "../../components/Section";
import bootImage from "../../assets/background/bootimagem.webp";
import { useNavigate } from "react-router-dom";
import startWindowsSound from '../../assets/sounds/start-windows.mp3';

const BootPage = (): React.ReactElement => {
  const navigate = useNavigate();
  function playSound() {
    const soundWindowsStart = new Audio(startWindowsSound);
    soundWindowsStart.muted = true;
    soundWindowsStart.play();
    soundWindowsStart.muted = false;
    navigate("/home");
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      playSound();
    }, 5000);
    return () => clearTimeout(timer);
  });

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
