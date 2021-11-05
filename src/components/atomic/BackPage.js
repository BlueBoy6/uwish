import React from "react";
import { useHistory } from "react-router-dom";
import Button from "components/form/Button";

export default function BackPage() {
  const history = useHistory();
  console.log("history : ", history);
  return <Button onClick={history.goBack}>Retour</Button>;
}
