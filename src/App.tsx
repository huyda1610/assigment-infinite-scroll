import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "@pages/product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
