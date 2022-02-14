import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../../context/Auth";
import api from "../../../services/api";
export default function Product() {
  const { productID } = useParams();
  const { token } = useAuth();
  const [product, setProduct] = useState(null);

  function loadProduct() {
    const promise = api.getProduct(productID);

    promise
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleProducttoCart(id){
    const promise = api.postSendToCart(token, id);

    promise.then(() => {
      alert("Produto adicionado ao carrinho, finalize sua compra");
    });
    promise.catch((error) => {
      console.log(error);
      alert("Erro ao adicionar ao carrinho, faça Login!")
    });
  }

  useEffect(loadProduct, [productID]);

  if (product === null) return <Container></Container>;

  return (
    <Container>
      <ParentDiv>
        <BlockImage>
          <img src={product.img} alt="product" />
        </BlockImage>
        <BlockDescription>
          <BlockText>
            <h1>{product.name}</h1>
            <h4>O que você precisa saber sobre esse produto:</h4>
            <h3>{product.description}</h3>
          </BlockText>
        </BlockDescription>
        <BlockBuy>
          <BlockText>
            <h2>R$ {product.price},00</h2>
            <h4>Estoque disponível:</h4>
            <h3>{product.amount} disponíveis</h3>
          </BlockText>
          <ButtonBuy onClick={() => handleProducttoCart(product._id)}>
            Adicionar ao Carrinho
          </ButtonBuy>
        </BlockBuy>
      </ParentDiv>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 80vw;
  padding-top: 15vh;
  
  display: flex;
  justify-content: center;

  box-sizing: border-box;
`;

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;

  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 25%);
  background-color: #fafafa;
  border-radius: 5px;

  box-sizing: border-box;

  @media (max-width: 800px){
    flex-direction: column;
    align-items: center;
  }
`;

const BlockImage = styled.div`
  width: 400px;
  padding: 10px;


  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  @media (max-width: 800px){
    width: 60%;
  }
`;

const BlockDescription = styled.div`
  width: 40%;
  padding: 10px;

  @media (max-width: 800px){
    width: 100%;
  }
`;

const BlockBuy = styled.div`
  width: 200px;
  padding: 10px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;

  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 25%);
  background-color: #fafafa;
  border-radius: 5px;

  box-sizing: border-box;

  @media (max-width: 800px){
    width: 90%;
  }
`;

const BlockText = styled.div`
  padding: 10px;
  word-wrap: wrap;

  h1 {
    font-weight: 700;
    font-size: 22px;
    font-weight: 600;
    line-height: 23px;
  }
  h2 {
    font-size: 30px;
    font-weight: 600;
    color: #666666;
  }
  h3 {
    padding-top: 10px;
    font-size: 14px;
    line-height: 16px;
  }
  h4 {
    padding-top: 10px;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
  }
`;

const ButtonBuy = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 100%;
  margin-top: 20px;
  padding: 10px;

  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: 23px;
  text-align: center;

  color: #ffffff;
  background: #023059;
  border-radius: 12px;
`;
