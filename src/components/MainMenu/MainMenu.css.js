import styled from 'styled-components';

export const Menu = styled.div`
width: 100%;
background-color: white;
display: flex;
align-items: center;
box-shadow: 4px 4px 7px 0px rgba(194,192,194,1);
`

export const Navigation = styled.ul`
width: 1210px;
padding-left: 30px;
padding-right: 30px;
margin-left: auto;
margin-right: auto;
list-style: none;
display: flex;
justify-content: space-between;
margin-top: 0;
margin-bottom: 0;

    li {
        display :flex;
        align-items: center;
    
        a {
            padding-top: 20px;
            padding-bottom: 17px;
            text-decoration: none;
            color: black;
            border-bottom: 3px solid white;
        }
    }

`
