import styled from 'styled-components';

const screenWidth = window.innerWidth;
const screenHeight = document.body.scrollHeight;
console.log({ screenWidth, screenHeight });

export const FooterSection = styled.div`

    display: flex;
    align-items: center;
    width: 100%;
    
    background-color: #141518;
    color: white;
    margin-top: 70px;
    position: relative;
    z-index: 3;

    div.rocket {
        position: absolute;
        z-index: 0;
        width: 80px;
        left: -100px;
        top: 100px;
        animation: rocket-fly 30s linear infinite; 
        animation-delay: 4s;
        transform: rotate(30deg);
    }

    div.gear {
        animation: gear-animation 24s linear infinite; 
        animation-delay: 4s;
        position: absolute;
        top: -49px;
        left: -100px;
        img {
            width: 50px;
            transform: rotate(0deg);
            animation: rotate-gear-animation 3s linear infinite; 
        }
    }

    div.wrapper {
    padding-top: 70px;
    padding-bottom: 70px;
    width: 1210px;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    animation: rocket-fly 24s linear infinite; 
    div:nth-child(1) {
        
    }

    a {
        text-decoration: none;
        color: white;
        transition: ease-in .2s;

        &:hover {
            color: #fb088e;
        }
    }

    }

    @keyframes gear-animation {
        0% {left: -100px} 
        15%{left: -100px}
        100% {left: ${screenWidth + 200}px} 
      }
    @keyframes rotate-gear-animation {
        0% {transform: rotate(0deg)} 
        100% {transform: rotate(360deg)} 
      }
    @keyframes rocket-fly {
        0% {left: -100px; top: 100px;} 
        100% {left: ${screenWidth + 200}px; top: ${-screenHeight - 200}px;} 
      }
`;