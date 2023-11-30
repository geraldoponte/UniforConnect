import React from "react";

// ESTILIZAÇÃO
import { IoMdAdd } from "react-icons/io";
import { AreaGrupos, OpcoesGrupos } from "./styles";

export function ButtonGrupo() {
  return (
    <>
      <AreaGrupos>
        <OpcoesGrupos>
          <IoMdAdd />
          Grupo 1
        </OpcoesGrupos>
      </AreaGrupos>
    </>
  );
}
