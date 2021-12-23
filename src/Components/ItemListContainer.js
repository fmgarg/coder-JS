import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [catalogo, setCatalogo] = useState ([])

    const {id} = useParams()

    useEffect (() =>{

            if(!id){
                
                fetch ('https://fakestoreapi.com/products')
                .then (res => res.json ())
                .then (json => {
                    setCatalogo(json)
                    //console.log (json)
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
                <div>
                <h4>"cargando..."</h4>
                </div>
    //catalogo.length? <ItemList catalogo ={catalogo}/> : <p>"cargando..."</p>

    )}else{
        return(
                <ItemList catalogo ={catalogo}/>
            
        )

    }

    

}

export default ItemListContainer