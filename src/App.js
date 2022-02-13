import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import webfontloader from "webfontloader";

import Header from "./components/Header";
import GlobalStyles from "./globalStyle/GlobalStyles";
import Main from "./pages/client/Main/Main";
import SignInClient from "./pages/client/SignInClient/SignInClient";
import SignUpClient from "./pages/client/SignUpClient/SignUpClient";
import { AuthProvider } from "./context/Auth";
import SignInAdmin from "./pages/admin/SignInAdmin/SignInAdmin";
import Product from "./pages/client/Product/Product";
import RegisterProduct from "./pages/admin/RegisterProduct/RegisterProduct";
import RegisterAdmin from "./pages/admin/RegisterAdmin/RegisterAdmin";
import Cart from "./pages/client/Cart/Cart";

export default function App() {
  useEffect(() => {
    webfontloader.load({
      google: { families: ["Bungee Inline"] },
    });
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyles />

        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign-in-client" element={<SignInClient />} />
          <Route path="/sign-up-client" element={<SignUpClient />} />
          <Route path="/products/:productID" element={<Product />} />
          <Route path="/admin/sign-in" element={<SignInAdmin />} />
          <Route path="/admin/register/product" element={<RegisterProduct />} />
          <Route path="/admin/register/admin" element={<RegisterAdmin />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
