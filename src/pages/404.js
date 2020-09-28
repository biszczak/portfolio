import React from "react"

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import blackholeIcon from '../images/blackhole-icon.png';
import styled from 'styled-components';

const Container = styled.div`
text-align: center;
margin-top: 120px;

img {
  transform: rotate(0deg);
  animation: rotate-blackhole 24s linear infinite; 
}

a.back {
  display: block;
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
  width: 170px;
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

@keyframes rotate-blackhole {
  0% {transform: rotate(0deg);} 
  100% {transform: rotate(360deg)} 
}
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <img src={blackholeIcon} alt="not found" />
      <h2>404</h2>
      <h3>Wybrana strona nie istnieje lub została usunięta.</h3>
      <a href="/" className="back" >
        Strona główna
      </a>
    </Container>
  </Layout>
)

export default NotFoundPage
