import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";

import productos from "./productos"; 

const ItemListContainer = () => {

    const [catalogo, setCatalogo] = useState ([])

    const {id} = useParams()

    //const [mensaje, setMensaje] = useState ("cargando...")

    useEffect (() =>{

            if(!id){
                
                fetch ('https://fakestoreapi.com/products')
                .then (res => res.json ())
                .then (json => {
                    setCatalogo(json)
                })
                .catch(err => console.log(err))
            }else{
                fetch (`https://fakestoreapi.com/products/category/${id}`)
                .then (res => res.json ())
                .then (json => {
                    setCatalogo(json)
                })
            }
    
    },[id])


    if(catalogo.length === 0){

        return (
    
        <p>"cargando..."</p>
    //catalogo.length? <ItemList catalogo ={catalogo}/> : <p>"cargando..."</p>

    )}else{
        return(
            <ItemList catalogo ={catalogo}/>
            
        )

    }

    

}

export default ItemListContainer