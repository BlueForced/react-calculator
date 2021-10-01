import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  }

  :root {
    background-color: ${({ theme }) => theme.colors.appBackground.main};
  }

  body {
    padding: 0;
    margin: 0.3rem;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: auto;
  }

  main {
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }

  a {
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.shadow.primary};
  }
 
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbar};
    border-radius: 10px;
  }
`;

export default GlobalStyle;
