import React from "react";

function BasketCount(props) {
    return (
        <div>
            <h1 className="items-basket"> Basket</h1>
            {props.basketCount} items
        </div>
    );
}
export default BasketCount;