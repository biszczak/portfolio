import React from 'react';

import { CustomButton } from './Button.css';

const Button = ({ children }) => {
    return (
        <CustomButton>
            {children}
        </CustomButton>
    )
}

export default Button;