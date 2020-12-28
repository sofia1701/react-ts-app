import styled, { createGlobalStyle } from 'styled-components';

import background from '../src/background.jpeg';

export const GlobalStyle = createGlobalStyle`
  html {
    height:100%
  }
  body {
    background-image: url(${background});
    background-size:cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Cormorant', sans-serif;
  }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 190px;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    margin: 0;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
