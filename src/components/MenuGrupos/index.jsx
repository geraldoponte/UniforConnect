import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import { ButtonText } from "../ButtonText";

import { AuthContext } from "../../contexts/AuthProvider";

// ESTILIZAÇÃO
import {
  StyledRoutesPageContainer,
  AreaLogo,
  ImgLogo,
  Title,
  AreaTitle,
  TitleMeusGrupos,
  AreaButton,
  BotaoSair,
} from "./styles";
import Logo from "../../assets/images/logoUnifor.png";

export function MenuGrupos() {
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
    signOut();
  };
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
      <BotaoSair>
        <ButtonText
          title={"Sair"}
          backgroundColor={"#d9d9d9"}
          colorText={"#031e5c"}
          onClick={() => handleSignOut()}
        />
      </BotaoSair>
    </StyledRoutesPageContainer>
  );
}
