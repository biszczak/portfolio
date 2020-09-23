import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;

    img {
        width: 100%;
    }

    .waves {
        position: absolute;
        width: 3px;
        height: 3px;
        background-color: transparent;
        left: 61px;
        top: 61px;
        border-radius: 50%;
        border-right: 1px solid black;
        animation: wave 1.5s linear infinite; 
        transform: rotate(45deg);
        
        &.one {
            animation-delay: 0s;
        }

        &.two {
            animation-delay: .5s;
        }

        &.three {
            animation-delay: 1s;
        }
    }


    @keyframes wave {
        0% {width: 3px;
            height: 3px;}
        100% {width: 30px;
            height: 30px;} 
    }
`;