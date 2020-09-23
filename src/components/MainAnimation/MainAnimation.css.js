import styled from 'styled-components';

export const AnimationContainer = styled.div`
    display: flex;
    justify-content: center;

    #hamburger-menu {
      position: absolute;
      top: -280px;
      left: -300px;
      color: white;
    }

    .wrapper {
      width: 450px;
      height: 500px;
      position: relative;
      transform: scale(.7);
    }

    img {
      position: absolute;
      top: 7px;
      left: 137px;
      z-index: 9;
    }
      
      .box {
        /* width: 20vmin;
        height: 20vmin; */
        width: 200px;
        height: 200px;
        /* border: 3px dashed green; */
        position: relative;
      }
    
      .box::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        /* border: 3px dashed red; */
        transform: scale(1.42);
      }
    
      .box.blue {
        transform: scale(1);
        animation: change-scale-one 8s linear infinite;
        top: -25px;
        left: 71px;
        z-index: 1;
      }
    
      .box.blue::before {
        border: 3px dashed black;
      }
    
      .box.pink {
        transform: scale(1.1);
        animation: change-scale-two 12s linear infinite;
        top: -25px;
        left: 68px;
        z-index: 3;
      }
    
      .box.violet {
        transform: scale(1.1);
        animation: change-scale-two 12s linear infinite;
        top: -293px;
        left: 253px;
        z-index: 2;
      }
    
      .box.transparent{
        transform: scale(1.1);
        animation: change-scale-two 12s linear infinite;
        top: -495px;
        left: 17px;
        z-index: 1;
        /* border: 1px dotted red; */
      }
    
      
      .spin-container {
        width: 100%;
        height: 100%;
        position: relative;
      }
    
      .spin-container.blue {
        animation: spin-one 20s linear infinite;
      }
    
      .spin-container.pink {
        animation: spin-two 20s linear infinite;
      }
      
      .shape {
        width: 100%;
        height: 100%;
        transition: border-radius 1s ease-out;
        position: absolute;
        overflow: hidden;
        z-index: 5;
      }
    
      .shape.blue {
        animation: morph-one 8s ease-in-out infinite both alternate;
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      }
    
      .shape.pink {
        animation: morph-two 8s ease-in-out infinite both alternate;
        border-radius: 30% 50% 40% 70% / 50% 60% 70% 40%;
        /* border: 3px dashed red; */
      }
    
      .shape.pink.border {
        transform: scale(1.3);
        border: 2px solid #fb088e;
      }
    
      .shape.transparent {
        animation: morph-two 8s ease-in-out infinite both alternate;
        border-radius: 30% 50% 40% 70% / 50% 60% 70% 40%;
        /* border: 3px dashed red; */
      }
    
      .shape.transparent.border {
        transform: scale(1.3);
        border: 2px solid #09dcf5;
      }
    
      .shape.violet {
        animation: morph-one 8s ease-in-out infinite both alternate;
        border-radius: 10% 70% 60% 50% / 30% 60% 30% 80%;
      }
    
      .shape.violet.border {
        transform: scale(1.2);
        /* border: 5px dotted #c504fd; */
      }
      
      .bd {
        width: 142%;
        height: 142%;
        position: absolute;
        left: -21%;
        top: -21%;
        background-size: 100%;
        background-position: center center;
        display: flex;
        color: #003;
        font-size: 5vw;
        font-weight: bold;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-transform: uppercase;
        animation: spin 12s linear infinite reverse;
        opacity: 1;
        z-index: 2;
      }
    
      .bd.blue {
        background-color: #09dcf5;
      }
    
      .bd.pink{
        background-color: #fb088e;
      }
    
      .bd.violet{
        background-color: #c504fd;
      }
    
      .bd.pink.border {
          transform: scale(1.1);
          background-color: transparent;
      }
    
      /* .bd.violet.border {
          transform: scale(1.1);
          background-color: transparent;
      } */
      
      @keyframes morph-one {
        0% {border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;} 
        100% {border-radius: 40% 60%;} 
      }
    
      @keyframes morph-two {
        0% {border-radius: 70% 30% 40% 60% / 80% 70% 30% 20%;} 
        100% {border-radius: 30% 70%;} 
      }
    
      @keyframes change-scale-one {
        0% {transform: scale(1);}
        50% {transform: scale(1.2);}
        100% {transform: scale(1);}
      }
    
      @keyframes change-scale-two {
        0% {transform: scale(1);}
        50% {transform: scale(1.2);}
        100% {transform: scale(1);}
      }
      
      @keyframes spin-one {
        to {
          transform: rotate(1turn);
        }
      }
    
      @keyframes spin-two {
        to {
          transform: rotate(-1turn);
        }
      }

      @media (max-width: 566px) {
        
        .wrapper {
          transform: scale(.5);
        }
      }

      @media (max-width: 399px) {
        
        .wrapper {
          margin-left: -20px;
        }
      }

      @media (max-width: 344px) {
        
        .wrapper {
          margin-left: -30px;
        }
      }

`;
