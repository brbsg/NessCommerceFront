import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/Auth";
import api from "../../../services/api";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignInClient() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { setPersistedData } = useAuth();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const promise = api.loginClient({ ...formData });

    promise.then(({ data }) => {
      setPersistedData(data.name, data.token);
      navigate("/");
    });
    promise.catch((error) => {
      console.log(error);
      alert("erro de Login, tente novamente!");
    });
  }

  return (
    <Container>
      <Header></Header>
      <FormContainer>
        <h1>NessCommerce</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="E-mail"
            type="email"
            onChange={(e) => handleChange(e)}
            name="email"
            value={formData.email}
            required
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) => handleChange(e)}
            name="password"
            value={formData.password}
            required
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <StyledLink to="/sign-up-client">Cadastre-se</StyledLink>
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
  height: 60vh;
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

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: content;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 600px) {
    width: 100vw;
    border-radius: 0;
    box-shadow: inherit;
  }
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 100%;
  height: 6vh;
  padding: 10px;

  font-size: 20px;
`;

const Button = styled.button`
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

const StyledLink = styled(Link)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
`;
