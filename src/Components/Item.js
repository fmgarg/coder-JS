
import ItemCount from "./ItemCount";

const Item = ({producto}) => {

    const onAdd = (contador) =>{
        console.log (contador)

    }

    return (
            <div key={producto.id} className="card">
                <p className="fw-bolder text-center">{producto.name}</p>
                <img className="card-img-top" scr={producto.img}/>
                <p>ID:{producto.id}</p>
                <p className="invisible">{producto.initial}</p>
                <p>Stock: {producto.stock}</p>
                <ItemCount stock={producto.stock} initial={producto.initial} onAdd={onAdd}/>
            </div>
    )
}

export default Item