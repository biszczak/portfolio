import styled from 'styled-components';

export const TechnologiesSection = styled.section`
padding-top: 70px;
padding-bottom: 70px;
max-width: 1210px;
padding-left: 30px;
padding-right: 30px;
margin-left: auto;
margin-right: auto;

h2 {
    font-size: 32px;
    margin-bottom: 70px;
}

div.wrapper {
    display: flex;

    div.description {
        width: 50%;
        margin-right: 20px;

        p {
            margin-top: 0;
            margin-bottom: 50px;
        }

        div.tech-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        button {
            margin-top: 22px;
        }
    }

    img {
        width: 50%;
    }

    img.tech {
        width: 50px;
        margin-right: 20px;
    }
}
`;