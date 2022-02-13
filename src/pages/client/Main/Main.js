import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import styled from "styled-components";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useAuth } from "../../../context/Auth";

export default function Main() {
  const [allProducts, setAllProducts] = useState([]);
  const { token } = useAuth();

  function loadProducts() {
    const promise = api.getAllProducts();

    promise.then(({ data }) => {
      console.log(data);

      setAllProducts(data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  function handleProducttoCart(id) {
    const promise = api.postSendToCart(token, id);

    promise.then(() => {
      alert("Produto adicionado ao carrinho, finalize sua compra");
    });
    promise.catch((error) => {
      console.log(error);
      alert("Erro ao adicionar ao carrinho, faça Login!");
    });
  }

  useEffect(loadProducts, []);

  return (
    <Container>
      {allProducts.map((product) => (
        <ProductBlock to={`/products/${product._id}`} key={product._id}>
          <CartButton onClick={handleProducttoCart(product._id)}>
            <MdOutlineAddShoppingCart fontSize={30} />
          </CartButton>
          <img src={product.img} alt={product.name} />
          <ProductText>
            <h3>{product.name}</h3>
            <h2>{product.description}</h2>
            <h1>R$ {Number(product.price)},00</h1>
          </ProductText>
        </ProductBlock>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  padding: 0 10px;
  padding-top: 15vh;

  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  box-sizing: border-box;

  background-color: #fafafa;
`;

const ProductBlock = styled(Link)`
  all: unset;
  width: 224px;
  height: 330px;

  position: relative;
  box-sizing: border-box;

  border-radius: 5px;
  border: 1px solid #dbdbdb;

  img {
    width: 220px;
    height: 220px;
    padding: 2px;
  }
`;

const ProductText = styled.div`
  padding: 20px 16px;

  h1 {
    margin: 3px 0;
    color: #00a650;
    font-size: 24px;
  }
  h2 {
    margin: 3px 0;
    color: #333;
    font-size: 14px;
  }
  h3 {
    margin: 3px 0;
    color: #333;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
  }
`;

const CartButton = styled.div`
  right: 10px;
  top: 10px;

  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  border-radius: 50%;
  background-color: #ffffff;
`;
