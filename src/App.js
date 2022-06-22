import Products  from "./pages/Products";
import { useState,useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
const imageUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"



function App() {
  const [myProducts,SetmyProducts]=useState([])
  

  const getProducts=async()=>{
    let response=await fetch('https://fakestoreapi.com/products')
    let _products=await response.json();
    SetmyProducts(_products);
  }
  useEffect(()=>{getProducts()},[])

  return (
    <div>
      <Routes>
      <Route path="/" element={<Products products={myProducts}></Products>}></Route>
      <Route path="/:productId" element={<ProductDetails/>}></Route>
      
      </Routes>
    </div>
  )
  
}

export default App;
