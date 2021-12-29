
import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';

const ItemCount = ({id, title, price, stock, initial, onAdd}) => {
    
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
            <NavLink to="../cart" className="btn btn-outline-dark mt-auto btnAddCart" disabled={stock<initial} onClick={()=>{onAdd(contador)}}>Comprar</NavLink>
            
            </>
    )
}

export default ItemCount;
