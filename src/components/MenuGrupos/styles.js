import styled from "styled-components";

export const StyledRoutesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  min-height: 100vh;
  align-items: center;
  border-radius: 0 12px 12px 0;
  box-shadow: 2px 4px 11px 0px rgba(0, 0, 0, 0.2);

  padding: 12px;

  background: linear-gradient(179deg, #0a42c5 0.93%, #031e5c 92%);
`;

export const AreaLogo = styled.div`
  display: flex;
  height: 100px;
  margin-top: 12px;
  justify-content: center;
  align-items: center;

  gap: 14px;
`;

export const ImgLogo = styled.img`
  max-width: 60px;
`;

export const Title = styled.text`
  white-space: pre-line;
  color: #c8d8ff;
  font-weight: 500;
`;

export const AreaTitle = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const TitleMeusGrupos = styled.text`
  white-space: pre-line;
  color: white;
  font-weight: 500;
`;

export const AreaButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  margin-top: 12px;

  justify-content: center;
`;
