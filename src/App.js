import React from "react";
import data from "./models/data.json";
import Header from "./components/Header"
import ProductList from "./components/ProductList";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import About from "./pages/About";
import Basket from "./components/Basket";

function App(){
  const [products, setProducts]= useState(data);
  const [phrase, setPhrase] = useState("");
  // const [basket, setBasket]= useState([]);
  // const [counter, setCounter]= useState(0);

  async function search (value) {
    const url = `https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) { 
    setProducts(results.results);
    }
  };
  
  return(
    <Router>
      <div className="App"> 
      <h1 className="Store"> iTunes Media Store</h1>
      <Header/>
      <Routes>
        <Route path ="/" element ={<Home/>}></Route>
        <Route path ="/about" element ={<About/>}></Route>
        <Route path ="/basket" element ={<Basket/>}></Route>

      </Routes>
      </div>
    </Router>
  );
  
  function Home() {
    return (
      <>
      <Search phrase={phrase} setPhrase={setPhrase} search={search}></Search>
      <ProductList
      items={products}
      />

      </>
    );
  }
}
export default App;