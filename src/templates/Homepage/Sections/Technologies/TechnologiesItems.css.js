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
 }

 @media (max-width: 566px) {
     width: 100%;
 }
`;