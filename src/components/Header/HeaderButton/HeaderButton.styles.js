import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 1.5rem;
  border: 1px solid ${(props) => (props.primary ? "#000" : "#FFF")};
  background: ${(props) => (props.primary ? "#000" : "transparent")};
  color: #FFF;
  cursor: pointer;
  font: var(--text-regular-normal);
`;
