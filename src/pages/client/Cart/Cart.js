import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import styled from "styled-components";
import { useAuth } from "../../../context/Auth";

export default function Cart() {
  const [CartProducts, setCartProducts] = useState([]);
  const { token } = useAuth();

  function loadCartProducts() {
    const promise = api.getCartProducts(token);

    promise.then(({data}) => {
      setCartProducts(data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  function handleBuy(){
    const promise = api.postConfirmBuy(token);

    promise.then(() => {
        alert("Sua compra foi feita com Sucesso!!!");
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  useEffect(loadCartProducts, [])

  

  return (
      <Container>
        <Title>Meus Produtos:</Title>
        {CartProducts.length !==0 ?
        <>
        <ContainerProdutos>
            {CartProducts.map((product) => (
                <ProductBlock to={`/products/${product._id}`} key={product._id}>
            <img src={product.img} alt={product.name} />
            <ProductText>
                <h3>{product.name}</h3>
                <h2>{product.description}</h2>
                <h1>R$ {Number(product.price)},00</h1>
            </ProductText>
            </ProductBlock>
            ))}
        </ContainerProdutos>
        <ButtonConfirm onClick={()=> handleBuy()}>
            Confirmar Compra
        </ButtonConfirm>
        </>
        :
        <WarnTitle>Faça Login ou Adicione alguns Produtos :) </WarnTitle>
        }
      </Container>
  );
};

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  padding-top: 15vh;

  display: flex;
  flex-direction: column;
  align-items: left;

  box-sizing: border-box;

  background-color: #fafafa;
`;

const Title = styled.div`
  width: 100%;
  padding: 15px;

  font-size: 30px;
  font-weight: bold;
`;
const WarnTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const ContainerProdutos = styled.div`
  width: 80vw;
  height: 100%;
  padding: 10px;

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

  border-radius: 5px;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;

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

const ButtonConfirm = styled.button`
  width: 200px;
  height: 6vh;
  padding: 10px;
  margin: 15px 0;

  border: 0;
  border-radius: 10px;
  background-color: green;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;