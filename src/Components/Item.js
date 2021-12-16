
import ItemCount from "./ItemCount";

import { NavLink } from "react-router-dom";

const Item = ({producto}) => {

    const onAdd = (contador) =>{
        console.log (contador)

    }

    return (
            <div className="card">
                <p className="fw-bolder text-center">{producto.title}</p>
                <img className="card-img-top" scr={producto.img} alt={producto.title}/>
                <p className="invisible">{producto.id}</p>
                <p className="invisible card-text description">{producto.description}</p>
                <p className="fw-bolder text-center">${producto.price}</p>
                <p className="text-center">Stock: {producto.rating.count}</p>
                <div className="card-footer p-5 pt-5 border-top-0 bg-transparent text-center">
                <ItemCount stock={producto.rating.count} initial={1} onAdd={onAdd}/>
                <NavLink to="/producto/id">Detalle</NavLink>
                </div>
            </div>
    )
}

export default Item