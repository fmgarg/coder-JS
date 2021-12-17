
import ItemCount from "./ItemCount";


const ItemDetail = (productos) => {

    const onAdd = (contador) =>{
        console.log (contador)

    }

    return (
            <div className="card">
                <p className="fw-bolder text-center">{productos.name}</p>
                <img className="card-img-top" src={productos.img} alt={productos.name}/>
                <p>ID:{productos.id}</p>
                <p>Descripcion: {productos.descripcion}</p>
                <p>Precio: {productos.precio}</p>
                <p className="invisible">{productos.initial}</p>
                <p>Stock: {productos.stock}</p>
                <ItemCount stock={productos.stock} initial={productos.initial} onAdd={onAdd}/>
            </div>
    )
}

export default ItemDetail