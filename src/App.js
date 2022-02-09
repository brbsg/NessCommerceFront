import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyles from "./globalStyle/GlobalStyles";
import Main from "./pages/client/Main/Main";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
