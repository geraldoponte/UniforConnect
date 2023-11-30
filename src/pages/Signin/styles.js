import styled from "styled-components";
import bgSignin from "../../assets/images/backgroundSignin.jpg";
import { Link } from "react-router-dom";

export const StyledRoutesPageContainer = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  height: 100vh;
  align-items: center;
  min-height: 100vh;
  background-image: url(${bgSignin});
  background-size: cover;
  background-position: center;

  @media (max-width: 876px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledDivArea = styled.div`
  display: flex;
  height: 100%;
  width: 40%;
  max-width: 600px;
  justify-content: center;
  align-items: center;

  background: rgba(195, 195, 195, 0.05);
  box-shadow: -23px 21px 18px 0px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);

  @media (max-width: 876px) {
    flex-direction: row;
    width: 80%;
  }
`;

export const DivArea = styled.div`
  max-width: 600px;
`;

export const AreaLogo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 876px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const ImgLogo = styled.img`
  width: 100%;
  max-width: 230px;
  padding: 10%;
`;

export const Title = styled.text`
  white-space: pre-line;
  text-align: center;

  color: #c8d8ff;
  // width: 217px;
  font-size: 30px;
  font-weight: 600;

  @media (max-width: 876px) {
    font-size: 30px;
  }
`;

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 25px;
  margin-top: 30px;
`;

export const RegisterLink = styled(Link)`
  color: white;
  font-size: 12px;
  font-weight: bold;
  margin-top: -5px;
`;
