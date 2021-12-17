
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    console.log(item)
    const onAdd = (contador) =>{
        console.log (contador)

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
                <ItemCount stock={item.rating.count} initial={1} onAdd={onAdd}/>
                </div>
            </div>
    )
}

export default ItemDetail