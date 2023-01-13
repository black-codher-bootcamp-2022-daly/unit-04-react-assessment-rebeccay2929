
import Product from "./Product"
import React from "react";

function ProductList(props) {
    return (
        <div className="main-page">
            <h1 className="title"> Suggested for you</h1> {""}
            {!props.items || props.items.length === 0? (
                <div className="empty"> No items found.</div>):
                (
                    props.items.map((item) => (
                        <div className="product-details" key={item.trackId}>
                            <Product 
                            key={item.trackId}
                            item={item}
                            kind= {item.kind}
                            name ={item.trackName}
                            thumbnail={item.artworkUrl100}
                            artistName={item.artistName}
                            price={item.trackPrice}
                            description={item.shortDescription}
                            />
                        </div>
                    ))
                
            )}
        </div>
    );

}
export default ProductList;