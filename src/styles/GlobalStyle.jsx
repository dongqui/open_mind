/* eslint-disable import/no-extraneous-dependencies */
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: Pretendard;
    margin: 0 auto;
    color: var(--Grayscale-60, #000);
    font-size: 1.6rem;
  }

  #root {
    width: 100%;
    height: 100vh;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
  }
  :root {
    /* Color */
    --Grayscale-10: #FFFFFF;
    --Grayscale-20: #F9F9F9;
    --Grayscale-30: #CFCFCF;
    --Grayscale-40: #818181;
    --Grayscale-50: #515151;
    --Grayscale-60: #000000;

    --Brown-10: #F5F1EE;
    --Brown-20: #E4D5C9;
    --Brown-30: #C7BBB5;
    --Brown-40: #542F1A;
    --Brown-50: #341909;

    --Blue-50: #1877F2;
    --Yellow-50: #FEE500;
    --Red-50: #B93333;

    /* Font Size */
    --font-h1: 40px;
    --font-h2: 32px;
    --font-h3: 24px;

    --font-body1: 20px;
    --font-body2: 18px;
    --font-body3: 16px;
    
    --font-caption1: 14px;

    /* Font Weight */
    --weight-bold: 700;
    --weight-medium: 500;
    --weight-regular: 400;

    /* Box Shadow */
    --shadow-1pt: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
    --shadow-2pt: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    --shadow-3pt: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);

  }
`;
export default GlobalStyle;
