import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../services/api";
import styled from "styled-components";
import Cart from "../assets/Cart_On.png";
import { useAuth } from "../context/Auth";

export default function Header() {
  const location = useLocation();

  const [client, setClient] = useState([]);

  // const { auth } = useAuth();

  // function loadClientContent() {
  //   const promise = api.getClientContent(auth);

  //   promise.then((response) => {
  //     console.log(response.data);
  //     setClient(response.data);
  //   });
  //   promise.catch((error) => {
  //     console.log(error);
  //   });
  // }

  // useEffect(loadClientContent, [auth]);

  if (location.pathname.includes("admin")) return <></>;

  return (
    <>
      <Container>
        <BlockText>
          <TitleCommerce to="/">NessCommerce</TitleCommerce>
        </BlockText>

        <SeachInput />

        <BlockText>
          {client.length !== 0 ? (
            <RegisterUser>Olá {client.name}</RegisterUser>
          ) : (
            <>
              <RegisterUser to="/sign-in-client">Entrar</RegisterUser>
              <RegisterUser to="/sign-up-client">Cadastrar</RegisterUser>
            </>
          )}
        </BlockText>

        <CartViewButton>
          <Link to="/client/cart">
            <img src={Cart} alt="Cart Shopping" />
          </Link>

          <BlockTextAdmin>
            <RegisterAdmin to="/admin/sign-in">Admin</RegisterAdmin>
          </BlockTextAdmin>
        </CartViewButton>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  position: fixed;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #023059;
`;

const BlockText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  gap: 8px;
`;

const TitleCommerce = styled(Link)`
  all: unset;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;

  color: #ffffff;

  box-sizing: border-box;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const SeachInput = styled.input`
  all: unset;
  width: 30%;
  height: 50%;
  padding: 15px 16px;

  font-family: sans-serif;

  color: #000;
  background-color: #ffffff;
  border-radius: 5px;
  box-sizing: border-box;

  ::placeholder {
    color: #000;
    font-family: sans-serif;
  }
`;

const CartViewButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  box-sizing: border-box;
  position: relative;

  img {
    width: 36px;
    height: 36px;
  }
`;

const RegisterUser = styled(Link)`
  all: unset;
  cursor: pointer;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  box-sizing: border-box;

  color: #ffffff;
`;

const BlockTextAdmin = styled.div`
  top: 5px;
  right: 0px;
  position: absolute;

  display: flex;

  box-sizing: border-box;
  width: max-content;
`;
const RegisterAdmin = styled(Link)`
  all: unset;

  cursor: pointer;

  font-style: normal;
  font-weight: normal;
  font-size: 10px;

  box-sizing: border-box;

  color: #ffffff;
`;
