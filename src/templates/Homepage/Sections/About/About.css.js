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
`;