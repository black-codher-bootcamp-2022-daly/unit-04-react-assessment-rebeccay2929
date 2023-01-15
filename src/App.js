import "./styles/App.css"
import React from "react";
import data from "./models/data.json";
import Header from "./components/Header"
import ProductList from "./components/ProductList";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import About from "./pages/About";
import Basket from "./components/Basket";
import BasketTotal from "./components/BasketTotal";
import BasketCount from "./components/BasketCount";




function App() {
  const [products, setProducts]= useState(data);
  const [phrase, setPhrase] = useState("");
  const [basket, setBasket]= useState([]);
  const [count, setCounter]= useState(0);
  const [setTotal] = useState(basket);


  // async function Search(value)  {
  //   const url = 'https://www.googleapis.com/books/vI/volumes?g=${value}&filter=paid-ebooks&print-type=books&projection=lite';
    
  //   const results = await fetch(url).them((res)=> res.json());
  //   if(!results.error){
  //     setProducts(results.items)
  //   }
  //     }

const basketTotal = basket.reduce(
  (increase, add) => increase + add.trackPrice, 0
);

function addToBasket(trackId) {
  products.map((item) => {
  if (item.trackId === trackId) {
    products.inBasket = true;
    setCounter(count + 1);
    setBasket((prev) => [...prev, products])

  }
  return item;
});
setTotal(basketTotal);
}

function removeFromBasket(trackId) {
  const removeProduct =[];
  basket.filter((item) => {
    if (item.trackId !== trackId) {
      removeProduct.push(item);
    } else {
      item.inBasket = !item.inBasket;
    }
      return item;
    });

    setBasket(removeProduct);
    setCounter(count -1);
}


  async function search(value) {
    const url = `https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) { 
    setProducts(results.results);
    }
  };


  
  return(
    <Router>
      <div> 
      <h1 className="Store"> iTunes Media Store</h1>

      <Header itemCount={count}/>
      <Routes>
        
        <Route path ="/" element ={<Home/>}></Route>
        <Route path ="/about" element ={<About/>}></Route>
        <Route path ="/basket" element ={<BasketItems/>}></Route>

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
      addToBasket={addToBasket}
      removeFromBasket={removeFromBasket}
      itemCount={data.length}
      />
      
      </>
    );
  }

  function BasketItems(){
    return (
      <div>
        <BasketCount basketCount={basket.length}/>
        {
          <Basket 
          basket={basket}
          removeFromBasket={removeFromBasket}
          basketCount={count}
          basketTotal={basketTotal}
          />
        }
        <div>
          Total: <BasketTotal basketTotal={basketTotal}/>
        </div>
      </div>
    )
  }
}
export default App;


