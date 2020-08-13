import React from 'react';

import Rocket from '../../../../components/Animated/Rocket/Rocket';

import linkedIcon from '../../../../images/social-linkedin.svg';
import githubIcon from '../../../../images/social-github.svg';
import settings from '../../../../images/settings-960.png';

// import { Link } from 'gatsby';
// import Button from '../../../../components/Button/Button';


import { FooterSection } from './Footer.css';


const Footer = () => {
    return (
        <FooterSection>
            <div className="gear">
                <img src={settings} alt="gear" />
            </div>
            <div className="rocket" >
                <Rocket />
            </div>
            <div id="contact" className='wrapper'>
                <div>
                    <h3>KONTAKT</h3>
                    <span>E-mail: <a href="mailto:dbiszczak@gmail.com">dbiszczak@gmail.com</a></span>
                </div>
                <div>
                    <h3>SOCJAL MEDIA</h3>
                    <div>
                        <img src={linkedIcon} alt="linkedin" />
                        <span>LinkedIN</span>
                    </div>
                    <div>
                        <img src={githubIcon} alt="github" />
                        <span>Github</span>
                    </div>
                </div>
            </div>
        </FooterSection>
    )
}

export default Footer;