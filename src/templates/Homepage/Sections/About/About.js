import React from 'react';
import PromoItem from './Components/PromoItem/PromoItem';

import { AboutSection } from './About.css';

const About = () => {

    return (
        <AboutSection>
            <h2 id="about">O mnie</h2>
            <p className="description">Mam na imię Damian.<br />
            Jestem programistą z ponad 4 letnim stażem, w tym 2 lata komercyjnego doświadczenia na stanowisku Front-End Developer. Zajmuję się tworzeniem aplikacji webowych oraz stron internetowych z użyciem najnowszych technologii. Moje projekty dostosowane są do wyświetlania zarówno na desktopach jak i urządzeniach mobilnych.  </p>
            <div className="wrapper">
                <PromoItem title="Strony internetowe" icon="websites-icon">
                    Szybkie i nowoczesne strony internetowe.
                </PromoItem>
                <PromoItem title="Aplikacje Web" icon="apps-icon">
                    Tworzenie rozbudowanych aplikacji webowych.
                </PromoItem>
                <PromoItem title="Design" icon="design-icon">
                    Projektowanie oraz drobne poprawki graficzne.
                </PromoItem>
                <PromoItem title="RWD" icon="rwd-icon">
                    Kompatybilność z tabletami i smartfonami.
                </PromoItem>
            </div>
        </AboutSection>
    )
}

export default About;