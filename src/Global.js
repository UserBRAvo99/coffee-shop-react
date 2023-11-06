import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
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
