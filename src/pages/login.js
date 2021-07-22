import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "context/auth";
import InputText from "components/form/InputText";
import InputPassword from "components/form/InputPassword";
import Button from "components/form/Button";
import Section from "components/layout/Section";
import styled from "styled-components";

const login = (props) => {
  let history = useHistory();
  const authContext = useAuth();
  const [loading, setLoading] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  function loginController(e) {
    console.log(authContext);
    setIdentifier(e.target.value);
  }

  function passwordController(e) {
    setPassword(e.target.value);
  }

  function keyController(e) {
    if (e.key === "Enter") submit();
  }

  async function submit() {
    setLoading(true);
    const authentication = await authContext.signin({ identifier, password });
    if (authentication.success) {
      history.push("/personnal-space");
    }
  }

  return (
    <Section title="Connecte-toi !" internAlign="center">
      <MaxSpace>
        {!loading ? (
          <div>
            <InputText
              label="Identifiant"
              placeholder="login"
              value={identifier}
              onChange={loginController}
            />

            <InputPassword
              label="Mot de passe"
              type="password"
              placeholder="password"
              onKeyUp={keyController}
              value={password}
              onChange={passwordController}
            />

            <Button onClick={submit}>C'est parti mon kiki !</Button>
          </div>
        ) : (
          <div>Attend, je te cherche..</div>
        )}
      </MaxSpace>
    </Section>
  );
};

export default login;

const MaxSpace = styled.div`
  width: 330px;
`;
