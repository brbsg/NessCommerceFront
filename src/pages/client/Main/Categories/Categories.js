import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../../../context/Auth";
import { MdShoppingCart, MdOutlineExitToApp, MdMenu } from "react-icons/md";

export default function Categories({
  auxAllProducts,
  allProducts,
  setAllProducts,
}) {
  const [categories, setCategories] = useState([]);

  const { clientName, setPersistedData } = useAuth();

  function filterCategory(category) {
    let auxArr = auxAllProducts;
    auxArr = auxArr.filter((e) => {
      return category === e.category;
    });
    setAllProducts(auxArr);
  }

  useEffect(() => {
    let auxArr = [];

    for (let product of auxAllProducts) {
      auxArr.push(product.category);
    }

    auxArr = [...new Set(auxArr)];

    setCategories(auxArr);
  }, [auxAllProducts]);

  return (
    <Container className="category">
      <span>Categorias</span>

      {categories.map((category, i) => (
        <h1 onClick={() => filterCategory(category)} key={i}>
          {category}
        </h1>
      ))}

      <BlockText>
        {clientName !== null ? (
          <>
            <MdOutlineExitToApp
              onClick={() => setPersistedData(null, null)}
              color=" #023059"
              fontSize={21}
            />
          </>
        ) : (
          // <RegisterUser>Olá djnvj</RegisterUser>
          <>
            <RegisterUser to="/sign-in-client">Entrar</RegisterUser>
            <RegisterUser to="/sign-up-client">Cadastrar</RegisterUser>
          </>
        )}
      </BlockText>
    </Container>
  );
}

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 15px;
  top: 10vh;
  left: 0;
  width: 20%;
  height: 100%;
  background-color: white;
  z-index: 10;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 30px;
    color: black;
    padding-bottom: 15px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
  }

  h1 {
    width: 100%;
    margin: 8px 0;
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    .category {
      display: flex;
      width: 30vw;
    }
  }

  @media (max-width: 900px) {
    width: 45%;
    display: none;

    span {
      font-size: 25px;
    }
  }
`;

const BlockText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  gap: 8px;
  margin: 0;

  border-top: 1px solid #eee;
  padding-top: 10px;

  font-size: 30px;
  font-weight: bold;
`;

const RegisterUser = styled(Link)`
  all: unset;
  cursor: pointer;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  box-sizing: border-box;

  color: #023059;
`;
