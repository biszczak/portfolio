import styled from 'styled-components';

let screenWidth = window.innerWidth;



export const FooterSection = styled.div`

    display: flex;
    align-items: center;
    width: 100%;
    
    background-color: #141518;
    color: white;
    margin-top: 70px;
    position: relative;
    z-index: 3;

    div#social-media {

        div {
            display: flex;
            flex-align: center;
            margin-bottom: 10px;

            img {
                margin-right: 20px;
                
                &:hover {
                    background-color: #fb088e;
                }
            }
        }
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

      @media (max-width: 899px) {
        margin-top: 50px;
      }

      @media (max-width: 899px) {
        
        div.wrapper {
            padding: 50px 15px;
        }
    }

    @media (max-width: 566px) {

        div.wrapper {
            flex-direction: column;

            #social-media {
                margin-top: 20px;
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
`;