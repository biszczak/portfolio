import styled from 'styled-components';

export const Alien = styled.div`
    position: absolute;
    top: 0px;
    left: calc(50% - 23px);
    z-index: -1;
    animation: show 15s linear infinite; 

    img.alien-img {
        width: 100% !important;
    }

    .eye {
        position: absolute;
        height: 5px;
        width: 5px;
        top: 22px;
        left: 19px;
        border-radius: 100%;
        background-color: #09dcf5;
        animation: eye-move 2s linear infinite; 
    }

    @keyframes show {
        0% {top: 0px;}
        35% {top: 0px;} 
        40% {top: -41px;} 
        60%{top: -41px;}
        65%{top: 0px;}
        100% {top: 0px;} 
    }

    @keyframes eye-move {
        0%{left: 19px;}
        25%{left: 16px;}
        50%{left: 19px;}
        75%{left: 22px;}
        100%{left: 19px;}
    }
`;