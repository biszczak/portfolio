import React from 'react';

import alienImg from '../../../images/alien.png';
import { Alien } from './Alien.css';

export default () => (
    <Alien>
        <img src={alienImg} alt="alien" />
        <div className="eye"></div>
    </Alien>
);