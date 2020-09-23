import styled from 'styled-components';

export const AboutSection = styled.section`
    padding-top: 70px;
    padding-bottom: 70px;
    max-width: 1210px;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: auto;
    margin-right: auto;
    
    &::after {
    background-position: center; 
    background-repeat: no-repeat; 
    }

    h2 {
        font-size: 32px;
        margin-bottom: 70px;
    }

    p.description {
        margin-top: 0;
        margin-bottom: 50px;
    }

    div.wrapper{
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 1229px) {

        div.wrapper{
            justify-content: space-around;
            flex-wrap: wrap;
        }
    }

    @media (max-width: 1229px) {
        padding-top: 50px;
        padding-bottom: 50px;
    }

    @media (max-width: 899px) {
        padding-left: 15px;
        padding-right: 15px;
        
        h2 {
            margin-bottom: 40px;
        }
    }
`;