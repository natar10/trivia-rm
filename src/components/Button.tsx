import styled, { css } from "styled-components";

export const Button = styled.button<{ primary: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: #13acc9;
      color: white;
      border: solid thin #3d9cab;
      box-shadow: 0px 1px 10px #d2da4a;
    `};
`;
