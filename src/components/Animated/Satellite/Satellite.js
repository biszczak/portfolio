import React from 'react';

import satelliteImg from '../../../images/satellite.png';
import { Wrapper } from './Satellite.css';

const Satellite = () => {
    return (
        <Wrapper>
            <img src={satelliteImg} alt="satellite" />
            <div className='waves one'></div>
            <div className='waves two'></div>
            <div className='waves three'></div>
        </Wrapper>
    )
}

export default Satellite;