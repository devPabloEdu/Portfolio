import React from "react";
import './index.scss';
import { Section } from "../../components/Section";
import bootImage from '../../assets/background/bootimagem.webp';
const BootPage = (): React.ReactElement => {
    return (
        <Section className="BootSectionContainer">
            <img src={bootImage} alt="Logo windows xp" />
            <div className="progressBarLoading">
                <span>...</span>
                <span>...</span>
                <span>...</span>
            </div>
        </Section>
    )
}

export default BootPage;