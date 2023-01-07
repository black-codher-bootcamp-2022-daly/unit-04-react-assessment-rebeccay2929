import React from "react";

function ProductList(props){
    return(
        <div>
            <h1 style={{
            textAlign: "center"

        }}> Rebecca's Media Store</h1>

            <div key="Productlist" className="product-container">
        {props.children}
      </div>
    </div>
  );
}   


export default ProductList;
     
    
