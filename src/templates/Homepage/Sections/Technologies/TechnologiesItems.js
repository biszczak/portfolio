import React from 'react';

import { TechGrid } from './TechnologiesItems.css';


const TechnologiesItems = ({ img, name }) => {
    return (
        <TechGrid>
            <img className="tech" src={img} alt={name} />
            <span>{name}</span>
        </TechGrid>
    )
}

export default TechnologiesItems;