import styled from 'styled-components';

export const HamburgerToggle = styled.div`

display: none;
--box-shadow-color: rgba(255, 101, 47, 0.2);
  width: 35px;
  height: 50px;
  position: fixed;
  left: 15px;
  z-index: 99;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  .menu-btn__burger,
  .menu-btn__burger::before,
  .menu-btn__burger::after {
    width: 35px;
    height: 2px;
  
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 5px var(--box-shadow-color);
  
    transition: all 0.5s ease-in-out;
  }
  .menu-btn__burger::before,
  .menu-btn__burger::after {
    content: "";
    position: absolute;
  }
  .menu-btn__burger::before {
    transform: translateY(-10px);
  }
  .menu-btn__burger::after {
    transform: translateY(10px);
  }

  &.open .menu-btn__burger {
    transform: translateX(-50px);
    background-color: transparent;
    box-shadow: none;
  }
  &.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  &.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }

  @media (max-width: 899px) {
    display: flex;
}
`;

export const Menu = styled.div`
width: 100%;
background-color: white;
display: flex;
align-items: center;
box-shadow: 4px 4px 7px 0px rgba(194,192,194,1);

div.wrapper {
    width: 1210px;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: auto;
    margin-right: auto;
}

`

export const Navigation = styled.ul`
list-style: none;
display: flex;
justify-content: center;
margin-top: 0;
margin-bottom: 0;

div.ufo {
  position: absolute;
  z-index: -1;
  width: 60px;
  right: 150px;
  top: 0px;
  transition: ease-in .5s;
  animation: ufo-move 2s linear infinite; 
}

&:hover {

  div.ufo {
    right: 150px;
    top: 100px;
  }
}

@keyframes ufo-move {
  0% {right: 150px;}
  50%{right: 120px;}
  100% {right: 150px;} 
}

#close-menu {
    color: red;
    position: absolute;
    left: 30px;
    top: 30px;
}

    li {
        display :flex;
        align-items: center;
    
        a {
            padding-top: 25px;
            padding-bottom: 22px;
            text-decoration: none;
            color: black;
            border-bottom: 3px solid white;
            margin-left: 20px;
            margin-right: 20px;
            transition: ease-in .2s;

            &:hover {
                border-bottom: 3px solid #09dcf5;
                color: #09dcf5;
            }
        }
    }

    @media (max-width: 899px) {
        display: none;
    }

`;

export const MobileNavigation = styled.div`
        display: none;
        position: fixed;
        border-bottom-right-radius: 100px;
        height: 80px;
        width: 80px;
        z-index: 98;
        background-color: #141518;
        flex-direction: column;
        margin-left: -30px;
        margin-top: 0;
        box-shadow: none;
        transition: ease-in .3s;

        ul{
          position: relative;
          display: none;
          justify-content: center;
          flex-direction: column;
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
          list-style: none;
          
          li {
            transition: ease-in-out .4s;
            margin-left: -400px;
            margin-right: auto;
            margin-bottom: 20px;
            
            a {
              color: white;
              text-decoration: none;
            }
        }
      }

        &.open {
          margin-left: -30px;
          border-bottom-right-radius: none;
          border-radius: 100%;
          border-top-left-radius: 0% !important;
          height: 200vh;
          width: 200vw;

          ul{
            display: flex;
            li {
              margin-left: auto;
              margin-right: auto;
            }
                      
        }
      }

        @media (max-width: 899px) {
            display: block;
        }
`;
