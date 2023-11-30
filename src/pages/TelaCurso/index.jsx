import React, { useState } from "react";

// COMPONENTS
import { Select } from "../../components/Select";

// ESTILIZAÇÃO
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import {
  StyledRoutesPageContainer,
  BotaoVoltar,
  DivArea,
  NameText,
  TextInstrucao,
  HelloText,
  AreaCurso,
  AreaSelect,
  TextCurso,
  ButtonProximo,
} from "./styles";
import { setOptions } from "leaflet";

export function TelaCurso() {
  const [selectedOption, setSelectedOption] = useState("");
  // const [options, setOptions] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedOption?.(event.target.value);
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
    { value: "option1", label: "ADS" },
    { value: "option2", label: "Ciência da Computação" },
    { value: "option3", label: "Eng. da Computação" },
  ];

  return (
    <>
      <StyledRoutesPageContainer>
        {/* Ícone */}
        <BotaoVoltar>
          <IoMdArrowRoundBack color="Blue" size={25} />
        </BotaoVoltar>

        <DivArea>
          <HelloText>Olá,</HelloText>
          <NameText>Gabriel Nobre</NameText>
          <TextInstrucao>
            Selecione o campo abaixo{"\n"}para entrar no grupo
          </TextInstrucao>
        </DivArea>

        <AreaCurso>
          <AreaSelect>
            <TextCurso>Curso:</TextCurso>
            <Select options={options} onChange={handleSelectChange} />
          </AreaSelect>

          <ButtonProximo>
            <IoMdArrowRoundForward color="Blue" size={25} />
          </ButtonProximo>
        </AreaCurso>
      </StyledRoutesPageContainer>
    </>
  );
}
