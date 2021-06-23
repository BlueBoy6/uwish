import React from "react";
import styled from "styled-components";
import Field from "components/form/Field";

export default function inputText({ value, onChange, placeholder, label }) {
  return (
    <Field>
      <Label>{label}</Label>
      <Input
        type="password"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Field>
  );
}

const Label = styled.label`
  font-size: 0.7rem;
  color: #cccccc;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #cecece;
  font-family: Helvetica, Arial, Sans-Serif;
  font-size: 1rem;
  background: #efefef;
  padding: 10px 12px;
  border-radius: 10px;
  margin-top: 5px;
  :hover {
    border: 1px solid #227c9d;
  }
  :focus-within,
  :focus {
    outline: none;
    border: 1px solid #227c9d;
    box-shadow: 0px 0px 3px 0px #227c9d;
  }
`;
