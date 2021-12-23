
import React from "react";

import {useContext} from "react";

import { context } from '../App';



const CartWidget = () => {

    const resultado = useContext(context)

    //console.log (resultado)

    return      <div>  
                    <span className="material-icons">shopping_cart</span>
                </div>
}

export default CartWidget;