import styled from 'styled-components';

export const TechGrid = styled.div`
display: flex;
align-items: center;
box-shadow: 0px 0px 15px -1px rgba(181,179,181,1);
width: 252px;
padding: 15px;
margin-bottom: 20px;

 img.tech {
     width: 50px;
     margin-right: 20px;
 }
`;

export const Portfolio = styled.div`
    img.main {
        width: 100%;
    }

    h2 {
        margin-top: 120px;
        margin-bottom: 70px;
        font-size: 32px;
    }

    h3 {
        font-size: 20px;
        margin-top: 50px;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        display: block;
        margin-top: 50px;
        margin-bottom: 0px;
        opacity: 1;
        transition: ease-in .2s;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0;
        text-align: center;
        text-transform: uppercase;
        padding: 17px 56px 18px 56px;
        border-radius: 100px;
        border: 0;
        outline: 0!important;
        background: #fb088e;
        width: 100px;
        margin-left: auto;
        margin-right: auto;
        color: white;
        letter-spacing: 1px;

        &:hover {
            background: #aa0660;
        }
        
    }

    div.back {
        text-decoration: none;
        display: block;
        margin-top: 50px;
        margin-bottom: 50px;
        opacity: 1;
        transition: ease-in .2s;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0;
        text-align: center;
        text-transform: uppercase;
        padding: 17px 56px 18px 56px;
        border-radius: 100px;
        border: 0;
        outline: 0!important;
        background: transparent;
        width: 100px;
        margin-left: auto;
        margin-right: auto;
        color: black;
        letter-spacing: 1px;
        border: 2px solid #fb088e;
        cursor:pointer;

        &:hover {
            background: #fb088e;
            color: white;
        }
        
    }
`;