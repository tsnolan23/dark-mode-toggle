// src/components/Container.js

import styled from "styled-components";

export default styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-sizing: border-box;
`;
