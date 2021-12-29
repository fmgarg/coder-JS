
import { NavLink } from "react-router-dom";

const Item = ({producto}) => {



    return (
            <div className="card">
                <p className="fw-bolder text-center">{producto.title}</p>
                <img className="card-img-top" src={producto.image} alt={producto.title}/>
                <p className="invisible">{producto.id}</p>
                <p className="invisible card-text description">{producto.description}</p>
                <p className="fw-bolder text-center">${producto.price}</p>
                <p className="text-center">Stock: {producto.count}</p>
                <div className="card-footer p-5 pt-5 border-top-0 bg-transparent text-center">
                <NavLink className="btn btn-outline-dark mt-auto btnAddCart" to={`products/${producto.id}`}>Detalle</NavLink>
                </div>
            </div>
    )
}

export default Item