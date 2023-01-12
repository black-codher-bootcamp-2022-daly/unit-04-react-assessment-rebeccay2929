import React from "react";

function Product({item}) {
    const {
        trackId,
        kind,
        trackName,
        artworkUrl100
    } = item;
return (
    <div className="Product-box">
        <img src={artworkUrl100} alt={trackName}/>
        <div className="Product-list">
            <h1> {kind}</h1>
            <h2> {trackName}</h2>

        </div>
    </div>

);
}
export default Product;