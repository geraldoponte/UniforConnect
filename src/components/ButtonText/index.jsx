import React from "react";
import { Container, Icon } from "./styles";

export function ButtonText({
  title,
  imgIcon,
  iconSrc,
  colorText,
  backgroundColor,
  isActive,
  borderStyle,
  justifyContent,
  ...rest
}) {
  return (
    <Container
      type="button"
      isActive={isActive}
      style={{
        color: colorText,
        backgroundColor: backgroundColor,
        border: borderStyle,
        justifyContent: justifyContent,
      }}
      {...rest}
    >
      {imgIcon && <Icon>{iconSrc}</Icon>}
      {title}
    </Container>
  );
}
