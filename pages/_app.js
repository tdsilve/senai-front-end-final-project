import '../styles/globals.css';
import { createGlobalStyle } from 'styled-components';
import { useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before{
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}
body {
  color: #333;
  font-size: 14px;
  font-weight: bold;
  transition: all .5s ease-in-out;
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
