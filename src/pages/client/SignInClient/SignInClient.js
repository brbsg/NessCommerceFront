import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import useAuth from '../../hooks/useAuth';
import api from "../../../services/api";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignInClient() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const { login } = useAuth();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const promise = api.loginClient({ ...formData });
    promise.then((response) => {
      // login(response.data);
      navigate("/");
    });
    promise.catch((error) => {
      console.log(error);
      alert("erro de Login, tente novamente!");
    });
  }

  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  width: 80vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fafafa;

  h1 {
    margin-bottom: 50px;

    font-size: 27px;
    font-style: bold;
    font-weight: 700;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Form = styled.form`
  width: 380px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  margin-bottom: 32px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  font-family: sans-serif;

  width: 100%;

  color: #000;
  background: #ffffff;
  padding: 15px 16px;
  border-radius: 5px;

  ::placeholder {
    color: #000;
    font-family: sans-serif;
  }
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 100%;

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;

  text-align: center;

  padding: 12px;

  color: #ffffff;
  background: #023059;
  border-radius: 5px;
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
