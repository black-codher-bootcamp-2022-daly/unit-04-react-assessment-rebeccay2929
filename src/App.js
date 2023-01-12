import React, { useState } from "react";
import data from "./models/data.json";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(){
  const [products]= useState(data);
  return(
    <Router>
      <div className="App"> 
      <h1 className="Media"> iTunes Media Store</h1>
      <Routes>
        <Route path ="/" element ={<Home/>}></Route>
      </Routes>
      </div>
    </Router>
  );
  function Home() {
    return (
      <>
      <ProductList
      items={products}
      />

      </>
    );
  }
}
export default App;