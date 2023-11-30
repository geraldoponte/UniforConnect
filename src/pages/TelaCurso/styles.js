import styled from "styled-components";

export const StyledRoutesPageContainer = styled.div`
  padding: 40px;
  min-height: 100vh;
  background: linear-gradient(119deg, #0b44c9 14.09%, #031d5b 94.41%);

  @media (max-width: 876px) {
      width: 120%;
  }
`;

export const BotaoVoltar = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 50%;

  margin-bottom: 60px;

  cursor: pointer;
`;

export const DivArea = styled.div`
  padding-left: 30px;
`;

export const HelloText = styled.div`
  font-size: 20px;
`;

export const NameText = styled.div`
  margin-top: -10px;
  font-size: 36px;
  font-weight: 500;
`;

export const TextInstrucao = styled.div`
  margin-top: 15px;
  font-size: 10px;
  font-weight: 4;
  white-space: pre-line;

  @media (max-width: 876px) {
    font-size: 15px;
  }
`;

export const AreaCurso = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  gap: 20px;
`;

export const AreaSelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 876px) {
    width: 90%;
  }
`;

export const TextCurso = styled.text`
  font-size: 20px;
  padding: 10px;
`;

export const ButtonProximo = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  margin-bottom: 60px;
  cursor: pointer;
  
`;
