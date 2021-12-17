
import React, {useState} from 'react';

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
            <button className="btn btn-outline-dark mt-auto btnAddCart" disabled={stock<initial} onClick={()=>{onAdd(contador)}}>Agregar</button>
            </>
    )
}

export default ItemCount;
