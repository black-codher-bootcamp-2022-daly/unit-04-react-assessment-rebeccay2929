import React from "react";
import {Link} from "react-router-dom";

function Header(props){
    return(
<div className="Nav-div">
    <ul className="Nav-list">
        <li>
            <Link to="/" id="homepage-link" className="List"> 
            Home</Link>
        </li>

        <li>
            <Link to="/about" id="aboutpage-link" className="=List">
                About 
            </Link>
        </li>

        <li>
            <Link to="/basket" id="basket-link" className="List">
                Basket
            </Link>
        </li>
    </ul>
</div>
    );
}
export default Header;