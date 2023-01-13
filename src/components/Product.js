import React from "react";

function Product({item}) {
    const {
        trackId,
        kind,
        trackName,
        artworkUrl100,
        artistName,
        trackPrice,
        shortDescription,
    } = item;
return (
    <div className="Product-box">
        <img src={artworkUrl100} alt={trackName}/>
        <div className="Product-list">
            <h2> {trackName}</h2>
            <h3>{artistName}</h3>
            <h3> £{trackPrice}</h3>
            <h3> {kind}</h3>
            <h3>{shortDescription}</h3>
            

        </div>
    </div>

);
}
export default Product;