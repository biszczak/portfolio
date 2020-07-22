import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${Normalize}
body {
  margin: 0;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 300;
  line-height: 23px;

  h1,h2,h3 {
    font-weight: 400;
  }
}
`

export const Wrapper = styled.div`
    max-width: 1210px;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: auto;
    margin-right: auto;

    
`;