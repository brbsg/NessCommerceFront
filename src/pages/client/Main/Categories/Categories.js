import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Categories({
  auxAllProducts,
  allProducts,
  setAllProducts,
}) {
  const [categories, setCategories] = useState([]);

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
