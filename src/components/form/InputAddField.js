import React, { useState } from "react";
import styled from "styled-components";
import Button from "components/atomic/Button";
import InputText from "./InputText";

export default function InputAddField({
  placeholder = "Ajoute à la liste..",
  addValue,
}) {
  const [inputValue, setInputValue] = useState("");

  const addToList = () => addValue(inputValue);

  return (
    <InputAddFieldContainer>
      <InputTextAdd
        placeholder={placeholder}
        label="Qu'est ce que tu voudrais ajouter ?"
        onChange={(e) => setInputValue(e.target.value)}
        submit={addToList}
      />
      <ButtonAdd onClick={addToList}>Ajouter à la liste !</ButtonAdd>
    </InputAddFieldContainer>
  );
}
const ButtonAdd = styled(Button)`
  margin-left: 20px;
  justify-self: stretch;
`;

const InputTextAdd = styled(InputText)`
  input {
    background: white;
  }
`;

const InputAddFieldContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
  margin-top: 20px;
  background: #f4f4f4;
  padding: 10px;
  border-radius: 10px;
`;
