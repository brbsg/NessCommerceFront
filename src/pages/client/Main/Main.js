import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import styled from "styled-components";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useAuth } from "../../../context/Auth";

export default function Main() {
  const navigate = useNavigate();

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
        //Essa div é para não deixar aumentar o tamanho do Product block ao dar o hover
        <ParentDiv key={product._id}>
          <CartButton
            className="cart-icon"
            onClick={() => handleProducttoCart(product._id)}
          >
            <MdOutlineAddShoppingCart color="#023059" fontSize={25} />
          </CartButton>
          <ProductBlock
            className="product-block"
            onClick={() => navigate(`/products/${product._id}`)}
          >
            <img src={product.img} alt={product.name} />
            <ProductText to="">
              <h3>{product.name}</h3>
              <h2>{product.description}</h2>
              <h1>R$ {Number(product.price)},00</h1>
            </ProductText>
          </ProductBlock>
        </ParentDiv>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 80vw;
  height: auto;
  padding: 0 10px;
  padding-top: 15vh;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  box-sizing: border-box;

  background-color: #f1f1f1;
`;

const ParentDiv = styled.div`
  width: 224px;
  height: 330px;
  position: relative;

  :hover {
    .cart-icon {
      display: flex;
    }
  }
`;

const ProductBlock = styled.div`
  width: 224px;
  height: 330px;
  cursor: pointer;
  box-sizing: border-box;

  border-radius: 5px;
  background-color: white;
  padding: 10px;
  position: relative;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;

    border-radius: 5px;
  }

  @media (max-width: 900px) {
    .cart-icon {
      display: flex;
    }
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 380px;
    z-index: 2;
  }
`;

const ProductText = styled(Link)`
  all: unset;
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
  display: none;
  position: absolute;
  right: 15px;
  top: 15px;

  width: 40px;
  height: 40px;

  justify-content: center;
  align-items: center;
  cursor: pointer;

  border-radius: 50%;
  background-color: #ffffff66;
  z-index: 5;

  :hover {
    background-color: #00000011;
  }
`;
