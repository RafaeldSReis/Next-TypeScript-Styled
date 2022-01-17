import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
  }
  body, input, textarea, select, button {
    font: 400 1rem 'Poppins', sans-serif;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;

export const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
