import React from 'react';
import websitesIcon from '../../../../../../images/websites-icon.svg';
import appsIcon from '../../../../../../images/apps-icon.svg';
import designIcon from '../../../../../../images/design-icon.svg';
import rwdIcon from '../../../../../../images/rwd-icon.svg';

import { PromoContainer } from './PromoItem.css';

const PromoItem = ({ children, title, icon }) => {
    let image = null;
    switch (icon) {
        case 'websites-icon':
            image = websitesIcon;
            break;
        case 'apps-icon':
            image = appsIcon;
            break;
        case 'design-icon':
            image = designIcon;
            break;
        case 'rwd-icon':
            image = rwdIcon;
            break;

        default:
            break;
    }

    return (
        <PromoContainer>
            <div>
                <img src={image} alt={icon} />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
        </PromoContainer>
    )
}

export default PromoItem;