import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [catalogo, setCatalogo] = useState ([])

    const {id} = useParams()

    //const [mensaje, setMensaje] = useState ("cargando...")

    useEffect (() =>{
                
                fetch (`https://fakestoreapi.com/products/${id}`)
                .then (res => res.json ())
                .then (json => {
                    setCatalogo(json)
                    console.log (json)
                })
    },[])


    if(catalogo.length === 0){

        return (
                <div>
                <h4>"cargando..."</h4>
                </div>
    //catalogo.length? <ItemList catalogo ={catalogo}/> : <p>"cargando..."</p>

    )}else{
        return(
                <ItemDetail catalogo ={catalogo}/>
            
        )

    }

    

}

export default ItemDetailContainer