import styled from 'styled-components';

let height;
let width;

if (typeof window !== 'undefined') {
    height = window.innerHeight;
    width = window.innerWidth;
}

const astronautTop = Math.floor(height * 0.5);


export const Homepage = styled.div`
position: relative;
overflow: hidden;
max-width: 100%;

img.right-decoration {
    position: absolute;
    right: -210px;
    top: -40px;
}

img.left-decoration {
    position: absolute;
    left: -410px;
    top: -640px;
}

div.rocket {
    position: absolute;
    z-index: -1;
    width: 80px;
    left: -100px;
    top: ${height}px;
    animation: rocket-fly 20s linear infinite; 
    transform: rotate(45deg);
    animation-delay: 10s;
}

div.satellite {
    position: absolute;
    z-index: -1;
    width: 80px;
    left: -100px;
    top: 150px;
    animation: satellite-fly 30s linear infinite; 
    animation-delay: .5s;
}

div.astronaut {
    position: absolute;
    z-index: -1;
    height: 150px;
    width: 70px;
    left: ${width}px;
    top: ${astronautTop}px;
    animation: astronaut-fly 20s linear infinite; 

    img {
        width: 100%;
        animation: astronaut-move 5s linear infinite; 
        margin-top: 0;
    }
    
}


    @keyframes rocket-fly {
        0% {left: -100px; top: ${height + 200}px;}
        100% {left: ${width + 200}px; top: 0px;} 
      }

    @keyframes satellite-fly {
        0% {left: -100px; top: -100px;}
        10% {left: 150px; top: 150px;}
        35%{left: 150px; top: 150px;}
        45%{left: -100px; top: -100px;}
        100% {left: -100px; top: -100px;} 
    }

    @keyframes satellite-fly-mobile {
        0% {right: -100px; top: -100px;}
        10% {right: 20px; top: 20px;}
        35%{right: 20px; top: 20px;}
        45%{right: -100px; top: -100px;}
        100% {right: -100px; top: -100px;} 
    }

    @keyframes astronaut-move {
        0% {margin-top: 0;}
        50% {margin-top: 70px;}
        100% {margin-top: 0;} 
    }

    @keyframes astronaut-fly {
        0% {left: ${width}px;}
        100% {left: -100px;} 
    }

    @media (max-width: 770px) {

        div.satellite {
            right: -100px;
            left: unset;
            top: 150px;
            animation: satellite-fly-mobile 30s linear infinite; 
            transform: rotate(90deg);
        }
    }
`;