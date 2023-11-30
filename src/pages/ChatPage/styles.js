import styled from "styled-components";

export const StyledRoutesPageContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;

export const AreaPai = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: flex-end;
  align-items: center;
  /* height: 100vh; */
  /* height: 20px; */
  /* flex-direction: column; */
  margin: 20px;
`;

export const Area = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: flex-end; */
  width: 100%;
  /* height: 100vh; */
  /* background: green; */
  max-height: 76vh;
  overflow: auto;

  //Estilizar a scrollbar
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #d2d2d2;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0a42c5; /* cor do controle de rolagem */
    border-radius: 4px;
  }
`;

export const BoxMessage = styled.input`
  width: 100%;
  height: 50px;

  outline: none;
  border: none;
  padding: 10px;
  background: #d9d9d9;
  border-radius: 12px;
  margin-top: 20px;

  color: #5c5c5c;
`;
