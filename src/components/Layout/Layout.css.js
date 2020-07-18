import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${Normalize}
body {
  margin: 0;
}
`

export const Wrapper = styled.div`
    width: 1210px;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: auto;
    margin-right: auto;

    p {
        word-break: break-all;
    }
`;