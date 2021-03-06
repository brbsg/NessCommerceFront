import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/Auth";
import api from "../../../services/api";

export default function SignInAdmin() {
  const navigate = useNavigate();

  const { setPersistedData } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function onEnterButton() {
    try {
      const { data } = await api.loginAdmin(formData);

      setPersistedData(data.name, data.token);
      navigate("/admin/register/product");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header>
        <span onClick={() => navigate("/")}>ness commerce</span>
      </Header>

      <FormContainer>
        <span>Olá, Digite o seu email e senha</span>

        <InputContainer>
          <Input
            type="text"
            placeholder="E-mail"
            onChange={({ target }) =>
              setFormData({ ...formData, email: target.value })
            }
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <EnterButton onClick={onEnterButton}>Entrar</EnterButton>
        </InputContainer>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  height: 35vh;
  width: 100vw;
  background-color: #023059;
  z-index: 1;
  padding: 20px;

  span {
    display: block;
    font-style: normal;
    font-size: 40px;
    font-family: "Bungee Inline";
    cursor: pointer;

    color: #ffffff;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 550px;
  height: 60vh;
  border-radius: 8px;
  gap: 5px;
  padding: 20px;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  font-size: 30px;
  font-weight: bold;
  z-index: 2;

  @media (max-width: 600px) {
    width: 100vw;
    border-radius: 0;
    box-shadow: inherit;
  }
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: content;
  flex-direction: column;
  gap: 5px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 100%;
  height: 6vh;
  padding: 10px;

  font-size: 20px;
`;

const EnterButton = styled.button`
  margin-top: 15px;
  border: 0;
  border-radius: 10px;
  width: 100%;
  height: 6vh;
  padding: 10px;
  background-color: #023059;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
