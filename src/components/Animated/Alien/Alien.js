import React from 'react';

import alienImg from '../../../images/alien.png';
import { Alien } from './Alien.css';

export default () => (
    <Alien>
        <img src={alienImg} className="alien-img" alt="alien" />
        <div className="eye"></div>
    </Alien>
);