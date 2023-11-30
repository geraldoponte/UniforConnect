import styled from "styled-components";

export const Container = styled.button`
  min-width: 120px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center; 
  padding: 0 21px; /* Ajuste do espaçamento interno */
  gap: 10px;
  border-radius: 12px;

  background: ${({ isActive }) => (isActive ? "#2460a9" : "#002373")};
  color: white;

  &:hover {
    cursor: pointer;
    background-color: #2460a9;
    color: white;
  }

  border: none;
  font-size: 14px;
  font-weight: 700;
`;

export const Icon = styled.div`
  /* width: 30px; */
`;
