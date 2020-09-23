import styled from 'styled-components';

export const TopSection = styled.section`
padding-top: 140px;
padding-bottom: 70px;

h1 {
        font-weight: normal;
        font-style: normal;
        font-size: 42px;
        margin: 0 auto;
        text-align: center;
        line-height: 45px;
        margin-top: -80px;
        margin-bottom: 80px;
}

a {
    text-decoration: none;
}

@media (max-width: 1229px) {
    padding-top: 120px;
    padding-bottom: 50px;
}

@media (max-width: 899px) {
    
    h1 {
        font-size: 32px;
    }
}

@media (max-width: 639px) {
    .right-decoration{
        display: none;
    }

    .left-decoration{
        display: none;
    }
        
}

@media (max-width: 566px) {
    padding-top: 30px;

    h1 {
        font-size: 24px;
        margin-top: -110px;
        margin-bottom: 50px;
    }
}

`;