import styled from 'styled-components';

export const ItemContainer = styled.div`
display: flex;
flex-direction: column;
text-decoration: none;
color: black;
width: 384px;
height: 380px;
position relative;
-webkit-box-shadow: 4px 4px 7px 0px rgba(194,192,194,1);
-moz-box-shadow: 4px 4px 7px 0px rgba(194,192,194,1);
box-shadow: 4px 4px 7px 0px rgba(194,192,194,1);

span.see {
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
}

div.title-and-description {
    position: absolute;
    bottom: 0;
    background-color: white;
    height: 40%;
    padding: 15px;
    text-decoration: none;
    transition: ease-in .3s;
    overflow: hidden;

    h2 {
        margin-bottom: 0;
    }

    span.category {
        text-transform: uppercase;
        font-size: 10px;
        color: #a6a6a6;
        font-weight: 400px;
        letter-spacing: 1px;
    }

    div.description p {
        min-height: 62px;
    }
}

img {
width: 100%;
opacity: 1;
transition: ease-in .2s;
}

`;

export const Grid = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;


.item-link {
    text-decoration: none;
    margin-bottom: 30px;

    &:hover {

        span.see {
            opacity: 1;
        }

        div.title-and-description {
            height: calc(60%);
        }
    }
}
`;
