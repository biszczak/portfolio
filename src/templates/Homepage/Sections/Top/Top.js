import React from 'react';
import MainAnimation from '../../../../components/MainAnimation/MainAnimation';
import rightDecoration from '../../../../images/right-.png';
import leftDecoration from '../../../../images/left-.png';
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Button from '../../../../components/Button/Button';

import { TopSection } from './Top.css';

const Top = () => {

    return (
        <TopSection>
            <img className="right-decoration" src={rightDecoration} alt="right-background" />
            <img className="left-decoration" src={leftDecoration} alt="left-background" />
            {/* <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} /> */}
            {/* <div dangerouslySetInnerHTML={{ __html: pageContext.content }} /> */}
            <MainAnimation />
            <AnchorLink to={`/home#about`} >
                <Button className="see">Dowiedz się więcej</Button>
            </AnchorLink>
        </TopSection>
    )
}

export default Top;