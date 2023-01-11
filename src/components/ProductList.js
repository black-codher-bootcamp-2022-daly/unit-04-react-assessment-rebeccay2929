import React from "react";
import Product from "./Product";
function ProductList(props) {
  return (
    <div>
      <h1 className="title"> Suggested for you </h1>{" "}
      {!props.items || props.items.length === 0 ? (
        <div className="empty"> Item not found</div>
      ) : (
        props.items.map((item) => (
          <div className="product" key={item.trackId}>
            <Product
              artistName={item.artistName}
              name={item.trackName}
              thumbnail={item.artworkUrl100}
              price={item.trackPrice}
              kind={item.kind}
              description={item.shortDescription}
              addToBasket={props.addToBasket}
              removeFromBasket={props.removeFromBasket}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
