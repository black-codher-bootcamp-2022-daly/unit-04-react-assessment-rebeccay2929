import React from "react";
import PropTypes from "prop-types";

function Product (props) {
    return (
        <div style={{
            backgroundColor: "pink",
            marginBottom: "4px",
            fontFamily: "monospace",
          
          }}>
            <h2> {props.product.artistName}</h2>
            <h2> {props.product.trackName}</h2>
            <img src= {props.product.artworkUrl100}/>
            <p> {props.product.trackPrice}</p>
            <p> {props.product.kind}</p>
            <p> {props.product.shortDescription}</p>
            



            
        </div>
    )
};

// Product.propTypes= {
//     product: PropTypes.shape({
//         artistName: PropTypes.isRequired,
//     }),
// };
export default Product;