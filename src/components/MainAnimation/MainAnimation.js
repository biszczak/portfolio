import React from 'react';
import triangleLogo from '../../images/triangle.png';

import { AnimationContainer } from './MainAnimation.css';

const MainAnimation = () => {

    return (
        <AnimationContainer>
            <div className="wrapper">
                <img src={triangleLogo} alt="triangle-logo" />
                <div className={["box", "blue"].join(' ')}>
                    <div className={["spin-container", "blue"].join(' ')}>
                        <div className={["shape", "blue"].join(' ')}>
                            <div className={["bd", "blue"].join(' ')}></div>
                        </div>
                    </div>
                </div>
                <div className={["box", "pink"].join(' ')}>
                    <div className={["spin-container", "pink"].join(' ')}>
                        <div className={["shape", "pink"].join(' ')}>
                            <div className={["bd", "pink"].join(' ')}></div>
                        </div>
                        <div className={["shape", "pink", "border"].join(' ')}>
                            <div className={["bd", "pink", "border"].join(' ')}></div>
                        </div>
                    </div>
                </div>
                <div className={["box", "violet"].join(' ')}>
                    <div className={["spin-container", "violet"].join(' ')}>
                        <div className={["shape", "violet"].join(' ')}>
                            <div className={["bd", "violet"].join(' ')}></div>
                        </div>
                        <div className={["shape", "violet", "border"].join(' ')}>
                            <div className={["bd", "violet", "border"].join(' ')}></div>
                        </div>
                    </div>
                </div>
                <div className={["box", "transparent"].join(' ')}>
                    <div className={["spin-container", "transparent"].join(' ')}>
                        <div className={["shape", "transparent"].join(' ')}>
                            <div className={["bd", "transparent"].join(' ')}></div>
                        </div>
                        <div className={["shape", "transparent", "border"].join(' ')}>
                            <div className={["bd", "transparent", "border"].join(' ')}></div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimationContainer>
    )
}

export default MainAnimation;