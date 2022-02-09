import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyles from "./globalStyle/GlobalStyles";
import Main from "./pages/client/Main/Main";
import SignInClient from "./pages/client/SignInClient/SignInClient";
import SignUpClient from "./pages/client/SignUpClient/SignUpClient";
import { AuthProvider } from './context/Auth';

export default function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in-client" element={<SignInClient />}/>
        <Route path="/sign-up-client" element={<SignUpClient />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}
