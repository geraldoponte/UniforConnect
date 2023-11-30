import React from "react";

// COMPONENTS
import { ButtonText } from "../ButtonText";

// ESTILIZAÇÃO
import {
  StyledRoutesPageContainer,
  AreaLogo,
  ImgLogo,
  Title,
  AreaTitle,
  TitleMeusGrupos,
  AreaButton,
} from "./styles";
import Logo from "../../assets/images/logoUnifor.png";

export function MenuGrupos() {
  return (
    <StyledRoutesPageContainer>
      <AreaLogo>
        <ImgLogo src={Logo} />
        <Title>UNIFOR {"\n"} CONNECT</Title>
      </AreaLogo>

      <hr style={{ width: "100%", marginTop: 20 }} />

      <AreaTitle>
        <TitleMeusGrupos>Meus Grupos:</TitleMeusGrupos>
      </AreaTitle>

      <AreaButton>
        <ButtonText title={"Disciplina 1"} />
        <ButtonText title={"Disciplina 2"} />
      </AreaButton>
    </StyledRoutesPageContainer>
  );
}
