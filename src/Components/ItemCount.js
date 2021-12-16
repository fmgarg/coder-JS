
import React, {useState} from 'react';

import  Button  from 'react-bootstrap/Button';

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [contador , setcontador] = useState (initial);

    const aumentarContador = () =>{
        if (contador < stock){
        setcontador ( contador + 1 )
        }
    }

    const reduceContador = () =>{
        if (contador > initial) {
        setcontador (contador-1)
        }
    }
    return  (
            <>
            <div className='text-center counter'>
                <span>
                    <button onClick={reduceContador}>-</button>            
                </span>
                <span>{contador}</span>
                <span>
                <button onClick={aumentarContador}>+</button>
                </span>
            </div>
            <Button variant="primary" disabled={stock<initial} onClick={()=>{onAdd(contador)}}>Agregar</Button>
            </>
    )
}

export default ItemCount;
