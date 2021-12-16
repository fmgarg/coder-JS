import React, { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";

import productos from "./productos"; 

const ItemDetailContainer = () => {

    const [catalogo, setCatalogo] = useState ([])

    const [mensaje, setMensaje] = useState ("cargando...")

    useEffect (() =>{
            
            const getItem = new Promise ( (res, rej) => {

                setTimeout(()=>{
                    if (Math.random () > 0.5) {
                        res (productos)
                    } else {
                        rej ('algo no va bien...')
                    }
                }, 20)
                
            })

            getItem.then ((resultado) => {
                setCatalogo (resultado)
            })

            getItem.catch((error)=>{
                setMensaje("Algo salio mal...")
            })
    },[])

    return (
    
    <ItemDetail productos={productos}/>

    )
}

export default ItemDetailContainer