import styled from "styled-components";

export default styled.button`
  background: ${props => props.theme.colors.buttonBackground};
  color: ${props => props.theme.colors.buttonColor};
  display: block;
  margin-top: 24px;
  max-width: 100%;
  border: none;
  line-height: 36px;
  padding: 0 12px;
  border-radius: 4px;
  font-size: 14px;
  cursor-pointer;
`;
