/*import React from 'react'
import Practice from './Practice.jsx'
import Counter from './Counter.jsx'
import AddProduct from './AddProduct.jsx'
export default function App() {
  return (
    <div>
     <AddProduct />
    </div>
  )
}*/

import React,  {  useState } from 'react';
import Productslist from "./Productslist.jsx";
import Cart from "./Cart.jsx";
function App(){
  const [cartItems,setCartItems]=  useState([]);

const ProductsData=[
 { id: 1, name: "Mobile", price:15000},
      { id: 2, name: "Laptop", price: 50000},
      { id: 3, name: "Headphones", price:2000},
      { id: 4, name: "Watches", price: 3000},
      { id: 5, name: "Accessories", price:5000},
  ];


const addToCart = (product) => {
  setCartItems([...cartItems,product]);
}
return (
  <div style={{ padding:  "20px"}}>
    <h1 style= {{ textAlign:  "center"}}>Product Store</h1>
    <div style={{
      display: "flex",
      justifyContent:  "space-between",
      alignItems: "flex-start",
      gap: "30px"
    }}>
      <Productslist items={ProductsData}  addToCart={addToCart}  />
      <Cart cartItems={cartItems}  />
    </div>
  </div>
);
}
export default App; 