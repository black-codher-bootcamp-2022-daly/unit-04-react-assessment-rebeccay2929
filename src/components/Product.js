import React from "react";

function  Product ({ items }) {
  const {
    artistName,
    trackName,
    artworkUrl100,
    trackPrice,
    kind,
    shortDescription,
  } = items;
  return (
    <div
    classnName="Product-details">
    
      <h2> {artistName}</h2>
      <h2> {trackName}</h2>
      <img src={artworkUrl100} />
      <p> {trackPrice}</p>
      <p> {kind}</p>
      <p> {shortDescription}</p>
      
    </div>
  );
};

export default Product;

