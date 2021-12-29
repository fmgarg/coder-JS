import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ItemList from "./ItemList";

import { db } from "../Firebase";

import { collection, getDocs, query } from "firebase/firestore";



const ItemListContainer = () => {

    const [catalogo, setCatalogo] = useState ([])

    const {id} = useParams()

    useEffect (() =>{

        const products = collection (db, "products")
        const promesa = getDocs (products)

            if(!id){
                
                promesa 
                .then ((resultado)=>{
                const firebaseProducts = []
                resultado.forEach (doc =>{
                firebaseProducts.push (doc.data())
                })
                setCatalogo (firebaseProducts)
                })
                .catch(err => console.log(err))
            }else{
                promesa 
                .then ((resultado)=>{
                const firebaseProducts = []
                resultado.forEach (doc =>{
                firebaseProducts.push (doc.data())
                })
                setCatalogo (firebaseProducts)
                })
                .catch(err => console.log(err))
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