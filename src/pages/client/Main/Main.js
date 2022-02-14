import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import styled from "styled-components";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useAuth } from "../../../context/Auth";
import Categories from "./Categories/Categories";

export default function Main() {
  const navigate = useNavigate();

  const [allProducts, setAllProducts] = useState([]);
  const [auxAllProducts, setAuxAllProducts] = useState([]);
  const { token } = useAuth();

  function loadProducts() {
    const promise = api.getAllProducts();

    promise.then(({ data }) => {
      setAllProducts(data);
      setAuxAllProducts(data);
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
      <Categories
        auxAllProducts={auxAllProducts}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
      />

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
              <h1>R$ {Number(product.price)},00</h1>
              <h2>{product.name}</h2>
            </ProductText>
          </ProductBlock>
        </ParentDiv>
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  right: 0;
  height: auto;
  padding: 0 10px;
  padding-top: 15vh;
  width: 80vw;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  box-sizing: border-box;

  background-color: #f1f1f1;

  @media (max-width: 1100px) {
    width: 70vw;
  }

  @media (max-width: 900px) {
    width: 100vw;
  }

  @media only screen and (hover: none) and (pointer: coarse) {
    .cart-icon {
      display: flex;
    }
  }
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
  display: flex;
  flex-direction: column;

  gap: 10px;
  width: 224px;
  height: auto;
  cursor: pointer;
  box-sizing: border-box;

  border-radius: 5px;
  background-color: white;
  padding: 10px;
  position: relative;
  padding-bottom: 20px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;

    border-radius: 5px;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    z-index: 2;

    h2 {
      display: flex;
    }
  }

  @media (max-width: 1000px) {
    .cart-icon {
      display: flex;
    }

    h2 {
      display: flex !important;
    }
  }
`;

const ProductText = styled(Link)`
  all: unset;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  gap: 10px;
  border-top: 1px solid #eee;

  h1 {
    color: #00a650;
    font-size: 24px;
  }
  h2 {
    display: none;
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
