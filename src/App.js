import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyles from "./globalStyle/GlobalStyles";
import Main from "./pages/client/Main/Main";
import SignInClient from "./pages/client/SignInClient/SignInClient";
import SignUpClient from "./pages/client/SignUpClient/SignUpClient";
import { AuthProvider } from "./context/Auth";
import SignInAdmin from "./pages/admin/SignInAdmin/SignInAdmin";
import RegisterProduct from "./pages/admin/RegisterProduct/RegisterProduct";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign-in-client" element={<SignInClient />} />
          <Route path="/sign-up-client" element={<SignUpClient />} />

          <Route path="/admin/sign-in" element={<SignInAdmin />} />
          <Route path="/admin/register/product" element={<RegisterProduct />} />
          <Route path="/admin/register/admin" element={<SignInAdmin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
