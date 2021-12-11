import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Regular';
    font-style: normal;
    font-weight: 300;
    src: local(※),
      url(./fonts/Roboto-Regular.ttf) format('truetype');
  }
`;
