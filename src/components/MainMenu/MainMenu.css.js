import styled from 'styled-components';

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

`
