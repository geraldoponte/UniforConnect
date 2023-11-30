import React, { useState } from "react";

// COMPONENT
import { MenuGrupos } from "../../components/MenuGrupos";
import { Select } from "../../components/Select";

// COMPONENTS
import { ButtonGrupo } from "../../components/ButtonGrupo";

// ESTILIZAÇÃO
import {
  StyledRoutesPageContainer,
  Area,
  AreaSelect,
  TextCurso,
  AreaGruposTitle,
  TitleGrupo,
} from "./styles";

export function GrupoSelecto() {
  const [selectedOption, setSelectedOption] = useState("");
  // const [options, setOptions] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // PARA RECEBER A API
  // useEffect(() => {
  //   const fetchOptions = async () => {
  //     try {
  //       const response = await fetch("URL_DA_SUA_API_AQUI");
  //       const data = await response.json();
  //       setOptions(data);
  //     } catch (error) {
  //       console.error("Erro ao buscar opções da API", error);
  //     }
  //   };

  //   fetchOptions();
  // }, []);

  const options = [
    { value: "option1", label: "Cyberseguraça" },
    { value: "option2", label: "Frontend" },
    { value: "option3", label: "Backend" },
  ];
  return (
    <>
      <StyledRoutesPageContainer>
        <MenuGrupos />
        <Area>
          <AreaSelect>
            <TextCurso>Disciplina:</TextCurso>
            <Select onChange={handleSelectChange} options={options} />

            <div>
              <AreaGruposTitle>
                <TitleGrupo>Grupos:</TitleGrupo>
              </AreaGruposTitle>
              <ButtonGrupo />
            </div>
          </AreaSelect>
        </Area>
      </StyledRoutesPageContainer>
    </>
  );
}
