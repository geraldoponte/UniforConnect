import React from "react";
import { SelectContainer } from "./syles";

export function Select({ options, onChange }) {
  return (
    <SelectContainer onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectContainer>
  );
}
