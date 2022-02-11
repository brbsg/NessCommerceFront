import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/Auth";
import api from "../../../services/api";

export default function RegisterProduct() {
  const navigate = useNavigate();

  const { token } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    img: "",
    price: 0,
    amount: 0,
    description: "",
  });

  async function onEnterButton() {
    try {
      await api.registerProductAdmin(formData, token);

      navigate("/admin/register/product");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header></Header>

      <FormContainer>
        <span>Preencha os dados do produto a ser cadastrado</span>

        <InputContainer>
          <Input
            type="text"
            placeholder="Nome"
            onChange={({ target }) =>
              setFormData({ ...formData, name: target.value })
            }
          />

          <Input
            type="text"
            placeholder="Imagem"
            onChange={({ target }) =>
              setFormData({ ...formData, img: target.value })
            }
          />
          <Input
            type="text"
            placeholder="Preço"
            onChange={({ target }) =>
              setFormData({ ...formData, price: target.value })
            }
          />
          <Input
            type="text"
            placeholder="Quantidade"
            onChange={({ target }) =>
              setFormData({ ...formData, amount: target.value })
            }
          />
          <Input
            type="text"
            placeholder="Descrição"
            onChange={({ target }) =>
              setFormData({ ...formData, description: target.value })
            }
          />

          <EnterButton onClick={onEnterButton}>Cadastrar</EnterButton>
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
  position: fixed;
  top: 0;
  height: 35vh;
  width: 100vw;
  background-color: #023059;
  z-index: -1;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 550px;
  height: 65vh;
  border-radius: 8px;
  gap: 5px;
  padding: 20px;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  font-size: 30px;
  font-weight: bold;

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
