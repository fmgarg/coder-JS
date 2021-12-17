
import ItemCount from "./ItemCount";

const Item = ({producto}) => {

    const onAdd = (contador) =>{
        console.log (contador)

    }

    return (
            <div className="card">
                <p className="fw-bolder text-center">{producto.name}</p>
                <img className="card-img-top" src={producto.img} alt={producto.name}/>
                <p>ID:{producto.id}</p>
                <p className="invisible">{producto.initial}</p>
                <p>Descripcion: {producto.descripcion}</p>
                <p>Stock: {producto.stock}</p>
                <p>${producto.precio}</p>
                <ItemCount stock={producto.stock} initial={producto.initial} onAdd={onAdd}/>
            </div>
    )
}

export default Item