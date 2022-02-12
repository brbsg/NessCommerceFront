import React from 'react';
import styled from "styled-components";
export default function Product(){
  // const [Product, setProduct] = useState([]);

  return (
  <Container>
    <BlockProduct>
      <img  alt="product"/>
    </BlockProduct>
    <BlockBuy>
      <BlockText>
        <h1>Product.name</h1>
        <h3>Product.description</h3>
        <h2>R$ Product.price</h2>
      </BlockText>
      <ButtonBuy>Adicionar ao Carrinho</ButtonBuy>
    </BlockBuy>
  </Container>
  );
}

const Container = styled.div`
  width: 800px;
  height: 100vh;
  padding-top: 15vh;

  display: flex;
  justify-content: center;
  gap:20px;

  box-sizing: border-box;
`;

const BlockProduct = styled.div`
  width: 400px;

  display: flex;
  align-items: top;

  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 25%);
  background-color: #FAFAFA;

  img{
    width: 390px;
    height: 390px;
    padding: 5px;
  }
`;

const BlockBuy = styled.div`
  width: 100%;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 25%);
  background-color: #FAFAFA;
`;

const BlockText = styled.div`

  h1{
    font-weight: 700;
    font-size: 22px;
  };
  h2{
    margin-top: 10px;
    font-size: 30px;
    font-weight: 600;
    color:  #666666;
  };
  h3{
    font-size: 14px;
  };
`;

const ButtonBuy = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 100%;
  margin-top: 150px;
  padding: 10px;

  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: 23px;
  text-align: center;


  color: #ffffff;
  background: #023059;
  border-radius: 5px;
`;