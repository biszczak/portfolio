import styled from 'styled-components';

export const Portfolio = styled.div`
    img.main {
        width: 100%;
    }

    a {
        text-decoration: none;
        display: block;
        margin-top: 22px;
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
`;