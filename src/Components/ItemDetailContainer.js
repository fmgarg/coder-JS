import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState ([])

    const {id} = useParams()

    useEffect (() =>{
                
                fetch (`https://fakestoreapi.com/products/${id}`)
                .then (res => res.json ())
                .then (json => {
                    setItem(json)
                    //console.log (json)
                })
    },[])

    if(item.length === 0){

        return (
                <div>
                <h4>"cargando..."</h4>
                </div>
    )}else{
        return(
                <ItemDetail item ={item}/>    
        )
    }

}

export default ItemDetailContainer