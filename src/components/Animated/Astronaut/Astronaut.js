import React from 'react';

import astronautImg from '../../../images/astronaut.png';
import { Astronaut } from './Astronaut.css';

export default () => (
    <Astronaut>
        <img src={astronautImg} alt="astronaut" />
    </Astronaut>
);