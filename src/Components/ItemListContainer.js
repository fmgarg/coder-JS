import React, { useEffect, useState } from "react";

import ItemList from "./ItemList";

export const productos = [

    {id:13, name:"Acer 21.5 Full HD", img:"url=https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg", stock:9, initial:1},
    {id:14, name:"Samsung Gaming Monitor", img:"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg", stock:7, initial:1},
    {id:15, name:"Women's Snowboard Jacket", img: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg", stock:0, initial:1}
];

const ItemListContainer = () => {

    const [catalogo, setCatalogo] = useState ([])

    const [mensaje, setMensaje] = useState ("cargando...")

    useEffect (() =>{
            
            const promise = new Promise ( (res, rej) => {

                setTimeout(()=>{
                    if (Math.random () > 0.5) {
                        res (productos)
                    } else {
                        rej ('algo no va bien...')
                    }
                }, 2000)
                
            })

            promise.then ((resultado) => {
                setCatalogo (resultado)
            })

            promise.catch((error)=>{
                setMensaje("Algo salio mal...")
            })
    },[])

    console.log (catalogo)

    return (
    
    catalogo.length? <ItemList catalogo ={catalogo}/> : <p>"cargando..."</p>

    )
}

export default ItemListContainer