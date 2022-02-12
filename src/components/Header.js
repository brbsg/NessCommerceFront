import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";
import { useAuth } from "../context/Auth";

export default function Header() {
  const location = useLocation();

  const { clientName } = useAuth();

  if (location.pathname.includes("admin")) return <></>;
  if (location.pathname.includes("client")) return <></>;

  return (
    <>
      <Container>
        <BlockText>
          <TitleCommerce to="/">Ness Commerce</TitleCommerce>
        </BlockText>

        <SeachInput />

        <BlockText>
          {clientName !== null ? (
            <RegisterUser to="">Olá {clientName}</RegisterUser>
          ) : (
            // <RegisterUser>Olá djnvj</RegisterUser>
            <>
              <RegisterUser to="/sign-in-client">Entrar</RegisterUser>
              <RegisterUser to="/sign-up-client">Cadastrar</RegisterUser>
            </>
          )}
        </BlockText>

        <CartViewButton>
          <Link to="/client/cart">
            <MdShoppingCart fontSize={30} color={"white"} />
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
  font-size: 40px;
  font-family: "Bungee Inline";
  cursor: pointer;

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
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
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
