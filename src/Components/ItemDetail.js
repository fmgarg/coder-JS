
import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    //console.log(item)
    
    const [carrito, setCarrito] = useState ([])

   // console.log (carrito)
    
    const onAdd = (contador) =>{

        const addToCart = carrito.slice (0)

        addToCart.push (item, contador)

        setCarrito (addToCart)

        //console.log (contador)

        console.log (carrito)

    }

    return (
            <div className="card">
                <p className="fw-bolder text-center">{item.title}</p>
                <img className="card-img-top" src={item.image} alt={item.title}/>
                <p className="invisible">{item.id}</p>
                <p className="card-text description">description:{item.description}</p>
                <p className="fw-bolder text-center">${item.price}</p>
                <p className="text-center">Stock: {item.rating.count}</p>
                <div className="card-footer p-5 pt-5 border-top-0 bg-transparent text-center">
                <ItemCount id={item.id} title={item.title} price={item.price} stock={item.rating.count} initial={1} onAdd={onAdd}/>
                </div>
            </div>
    )
}

export default ItemDetail