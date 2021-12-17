import React, { useEffect, useState } from "react";

import ItemList from "./ItemList";

import productos from "./productos"; 

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
                }, 20)
                
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