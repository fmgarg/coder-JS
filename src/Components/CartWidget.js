
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { context } from "./CustomProvider"

const CartWidget = () => {

    const {cantidad} = useContext(context)

    return      <div> 
                    <Link to="/cart"> 
                        <span className="material-icons">shopping_cart</span>
                        {cantidad}
                    </Link>
                </div>
}

export default CartWidget;