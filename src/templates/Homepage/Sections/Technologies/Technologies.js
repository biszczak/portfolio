import React from 'react';
import techBackground from '../../../../images/tech-background.jpg';
import TechnologiesItems from './TechnologiesItems';
import { Link } from 'gatsby';
import Button from '../../../../components/Button/Button';

import htmlIcon from '../../../../images/html-ico.png';
import cssIcon from '../../../../images/css-ico.png';
import sassIcon from '../../../../images/sass-ico.png';
import jsIcon from '../../../../images/js-ico.png';
import reactIcon from '../../../../images/react-ico.png';
import gatsbyIcon from '../../../../images/gatsby-icon.png';
import graphqlIcon from '../../../../images/graphql-ico.png';
import reduxIcon from '../../../../images/redux-ico.png';
import restIcon from '../../../../images/rest-ico.png';
import rwdIcon from '../../../../images/rwd-ico.png';
import gitIcon from '../../../../images/git-ico.png';
import wordpressIcon from '../../../../images/wordpress-ico.png';
import photoshopIcon from '../../../../images/photoshop-ico.png';

import { TechnologiesSection } from './Technologies.css';

const Technologies = () => {
    return (
        <TechnologiesSection>
            <h2>Technologie i narzędzia</h2>
            <div className="wrapper">
                <div className="description">
                    <p>Technologie oraz narzędzia, których używam na codzień. Każda z technologii poniżej została użyta przynajmniej w jednym projekcie: </p>
                    <div className="tech-container">
                        <TechnologiesItems img={htmlIcon} name="HTML" />
                        <TechnologiesItems img={cssIcon} name="CSS" />
                        <TechnologiesItems img={sassIcon} name="Sass" />
                        <TechnologiesItems img={jsIcon} name="JavaScript" />
                        <TechnologiesItems img={reactIcon} name="React" />
                        <TechnologiesItems img={reduxIcon} name="Redux" />
                        <TechnologiesItems img={gatsbyIcon} name="Gatsby" />
                        <TechnologiesItems img={graphqlIcon} name="GraphQL" />
                        <TechnologiesItems img={wordpressIcon} name="Wordpress" />
                        <TechnologiesItems img={restIcon} name="Rest API" />
                        <TechnologiesItems img={rwdIcon} name="RWD" />
                        <TechnologiesItems img={gitIcon} name="Git" />
                        <TechnologiesItems img={photoshopIcon} name="Photoshop" />
                    </div>
                    <Link to={`/portfolio`} style={{ textDecoration: 'none' }}>
                        <Button>Portfolio</Button>
                    </Link>
                </div>
                <img src={techBackground} alt="technologies" />
            </div>
        </TechnologiesSection>
    )
}

export default Technologies;