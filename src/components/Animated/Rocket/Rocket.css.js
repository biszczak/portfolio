import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;

    img {
        width: 100%;
    }

    .main-flame {
        background-color: #fb088e;
        width: 5px;
        height: 10px;
        position: absolute;
        animation: flame .5s linear infinite; 
        left: 37px;
        top: 92px;
        z-index: 1;
    }

    .flame {
        background-color: #c504fd;
        width: 2px;
        height: 7px;
        position: absolute;
        animation: support-flame .5s linear infinite; 
    }

    .left-flame {
        left: 32px;
        top: 92px;
    }

    .right-flame {
        left: 45px;
        top: 92px;
    }

    @keyframes flame {
        0% {height: 5px;} 
        50% {height: 40px;} 
        100% {height: 5px;} 
      }

    @keyframes support-flame {
        0% {height: 5px;} 
        50% {height: 30px;} 
        100% {height: 5px;} 
      }

`;