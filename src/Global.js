import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
body {
font-family: Alegreya Sans;
font-size: 19px;
font-style: normal;
font-weight: 400;
line-height: 36px;
letter-spacing: 0.019px;
}
* {
  box-sizing: border-box;
}

body {
  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: auto;
    margin: 0 auto;
  }
}
.container {
  padding: 0 18px;
  @media screen and (min-width: 767px) {
    padding: 0 30px;
  }
  @media screen and (min-width: 1023px) {
    padding: 0 60px;
  }
  @media screen and (min-width: 1439px) {
    padding: 0 120px;
  }
}



ul,
li,
h1,
h2,
h3,
h4,
h5,
p {
  padding: 0;
  margin: 0;
  list-style: none;
}
`;
