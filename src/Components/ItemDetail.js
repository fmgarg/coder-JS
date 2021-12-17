
import ItemCount from "./ItemCount";

const ItemDetail = ({catalogo}) => {

    console.log(catalogo)
    const onAdd = (contador) =>{
        console.log (contador)

    }

    return (
            <div className="card">
                <p className="fw-bolder text-center">{catalogo.title}</p>
                <img className="card-img-top" src={catalogo.image} alt={catalogo.title}/>
                <p className="invisible">{catalogo.id}</p>
                <p className="card-text description">description:{catalogo.description}</p>
                <p className="fw-bolder text-center">${catalogo.price}</p>
                <p className="text-center">Stock: {catalogo.rating.count}</p>
                <div className="card-footer p-5 pt-5 border-top-0 bg-transparent text-center">
                <ItemCount stock={catalogo.rating.count} initial={1} onAdd={onAdd}/>
                </div>
            </div>
    )
}

export default ItemDetail