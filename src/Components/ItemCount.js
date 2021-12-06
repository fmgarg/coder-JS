import {useState} from 'react';

//despues del return debe haber algo en la misma linea sino poner entre ()
const ItemCount = () => {
    
    const [contador , setcontador] = useState (0)
    let init = 0
    useState(init)

    const aumentarContador = () =>{
        console.log("Aumentar contador")
        setcontador (contador+1)
    }

    const reduceContador = () =>{
        console.log("Reduce contador")
        setcontador (contador-1)
    }

    return  <div>
            <h1>Test props</h1>
            <p>El contador va: {contador}</p>
            <button onClick={aumentarContador}>aumentar</button>
            <button onClick={reduceContador}>reducir</button>
            </div>
}

//exportamos la variable app para que este disponible fuera de App.js

export default ItemCount;
