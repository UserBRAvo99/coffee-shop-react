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
.container {
  padding: 0 18px;
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
