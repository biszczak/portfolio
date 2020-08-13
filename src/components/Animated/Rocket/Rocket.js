import React from 'react';

import rocketImg from '../../../images/rocket.png';
import { Wrapper } from './Rocket.css';

const Rocket = () => {
    return (
        <Wrapper>
            <img src={rocketImg} alt="rocket" />
            <div className="main-flame"></div>
            <div className="flame left-flame"></div>
            <div className="flame right-flame"></div>
        </Wrapper>
    )
}

export default Rocket;