import React from 'react';

import ufoImg from '../../../images/ufo.png';
import { Wrapper } from './Ufo.css';

const Ufo = () => {
    return (
        <Wrapper>
            <img src={ufoImg} alt="ufo" />
        </Wrapper>
    )
}

export default Ufo;