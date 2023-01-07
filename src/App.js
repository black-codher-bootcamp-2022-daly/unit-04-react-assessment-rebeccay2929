import React, {useState} from 'react';
import Product from "./components/Product";
import data from "./models/data.json";
import ProductList from "./components/ProductList";

function App() {
  const  [product, setProducts] = useState(data);
  return (
    <div>
      <ProductList>
        {product.map((item)=> (<Product
        key={item.trackId}
        product={item}/>

         ))}
      
      </ProductList>
      
    </div>
  );
}

export default App;
