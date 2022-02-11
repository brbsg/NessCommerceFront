import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import styled from "styled-components";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function Main() {
  const [allProducts, setAllProducts] = useState([]);

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

  useEffect(loadProducts, []);

  // if (allProducts.length === 0) {
  //   return (
  //     <Container>
  //       <ProductBlock>
  //         <CartButton onClick={() => alert("adicionar no carrinho")}>
  //           <img src={CartAdd} alt="Cart-Add" />
  //         </CartButton>
  //         <img />
  //         <ProductText>
  //           <h3>Celular</h3>
  //           <h2>Celular bom</h2>
  //           <h1>R$ 15.000,00</h1>
  //         </ProductText>
  //       </ProductBlock>
  //       <ProductBlock>
  //         <CartButton onClick={() => alert("adicionar no carrinho")}>
  //           <img src={CartAdd} alt="Cart-Add" />
  //         </CartButton>
  //         <img />
  //         <ProductText>
  //           <h3>Outro Celular</h3>
  //           <h2>Celular ruim</h2>
  //           <h1>R$ 30.000,00</h1>
  //         </ProductText>
  //       </ProductBlock>
  //     </Container>
  //   );
  // }
  return (
    <Container>
      {allProducts.map((product) => (
        <ProductBlock key={product._id}>
          <CartButton onClick={() => alert("adicionar no carrinho")}>
            <MdOutlineAddShoppingCart fontSize={30} />
          </CartButton>
          <img src={product.img} alt={product.name} />
          <ProductText>
            <h3>{product.name}</h3>
            <h2>{product.description}</h2>
            <h1>{product.price}</h1>
          </ProductText>
        </ProductBlock>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  padding-top: 15vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;

  box-sizing: border-box;

  background-color: #fafafa;
`;

const ProductBlock = styled.div`
  width: 224px;
  height: 330px;

  position: relative;
  box-sizing: border-box;

  border-radius: 5px;
  border: 1px solid #dbdbdb;

  img {
    width: 224px;
    height: 224px;
  }
`;

const ProductText = styled.div`
  padding: 20px 16px;

  h1 {
    color: #00a650;

    font-size: 24px;
  }
  h2 {
    color: #333;
    font-size: 14px;
  }
  h3 {
    color: #333;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
  }
`;

const CartButton = styled.div`
  right: 10px;
  top: 10px;

  position: absolute;

  img {
    width: 36px;
    height: 36px;
  }
`;
