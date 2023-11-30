import React from "react";
import { AreaInput, InputText, IconContainer } from "./styles";

export function Input({ imgIcon, iconUi, colorText, ...rest }) {
  return (
    <AreaInput>
      {imgIcon && <IconContainer>{iconUi}</IconContainer>}
      <InputText {...rest} style={{ color: colorText }} />
    </AreaInput>
  );
}
