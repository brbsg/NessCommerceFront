import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { useAuth } from "../../../context/Auth";

export default function Cart() {
  const navigate = useNavigate();
  const [CartProducts, setCartProducts] = useState([]);
  const [changeCart, setChangeCart] = useState(true);
  const { token } = useAuth();

  async function loadCartProducts() {
    try {
      console.log(token);

      const { data } = await api.getCartProducts(token);
      setCartProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleBuy() {
    const promise = api.postConfirmBuy(token);

    promise.then(() => {
      alert("Sua compra foi feita com Sucesso!!!");
      setChangeCart(!changeCart);
    });
    promise.catch((error) => {
      console.log(error);
      alert("Erro realizar compra. Tente novamente, por favor");
    });
  }

  function handleRemovefromCart(id) {
    const promise = api.postRemovefromCart(token, id);

    promise.then(() => {
      alert("Produto removido do carrinho com sucesso.");
      setChangeCart(!changeCart);
    });
    promise.catch((error) => {
      console.log(error);
      alert("Erro ao remover carrinho. Tente novamente, por favor");
    });
  }

  useEffect(loadCartProducts, [token, changeCart]);

  return (
    <Container>
      <Title>
        Meus Produtos:
        <ButtonConfirm onClick={() => handleBuy()}>
          Confirmar Compra
        </ButtonConfirm>
      </Title>
      {CartProducts.length !== 0 ? (
        <>
          <ContainerProdutos>
            {CartProducts.map((product) => (
            <ParentDiv key={product._id}>
              <CartButton
              className="cart-icon"
              onClick={() => handleRemovefromCart(product._id)}
              >
              <MdDelete color="#023059" fontSize={25} />
              </CartButton>
              <ProductBlock
              className="product-block"
              onClick={() => navigate(`/products/${product._id}`)}
              >
                <img src={product.img} alt={product.name} />
                <ProductText>
                  <h1>R$ {Number(product.price)},00</h1>
                  <h3>{product.name}</h3>
                </ProductText>
              </ProductBlock>
            </ParentDiv>
            ))}
          </ContainerProdutos>
        </>
      ) : (
        <WarnTitle>Faça Login ou Adicione alguns Produtos :) </WarnTitle>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 80vw;
  height: auto;
  padding-top: 15vh;

  display: flex;
  flex-direction: column;
  align-items: left;

  box-sizing: border-box;

  @media (max-width: 800px) {
    width: 100vw;
  }
  @media only screen and (hover: none) and (pointer: coarse) {
    .cart-icon {
      display: flex;
    }
  }
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

const ParentDiv = styled.div`
  width: 224px;
  height: 377px;
  position: relative;

  :hover {
    .cart-icon {
      display: flex;
    }
  }
`;

const ContainerProdutos = styled.div`
  width: 80vw;
  height: 100%;
  padding: 10px;

  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  box-sizing: border-box;

  @media (max-width: 800px) {
    width: 100vw;
  }

`;

const ProductBlock = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  width: 224px;
  height: 377px;
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

const ProductText = styled.div`
  padding: 20px 16px;

  h1 {
    margin: 3px 0;
    color: #00a650;
    font-size: 24px;
  }
  h2 {
    display: none;
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
  z-index: 6;

  :hover {
    background-color: #00000011;
  }
`;

const ButtonConfirm = styled.button`
  width: 200px;
  height: 6vh;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  background-color: green;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
