import { db } from "../Firebase"
import { addDoc, collection } from "firebase/firestore"
import { useState, memo } from "react"
import { useContext } from "react"
import { context } from "./CustomProvider"
import validator from "validator"
import { toast } from "react-toastify"

const Cart = () => {

    const [loading, setLoading] = useState(false)
    const [id, setId] = useState("")
    const [nombre, setNombre] = useState("")
    const { carrito , eliminarProducto , vaciarCarrito } = useContext(context)
    const [error, setError] = useState("")

    const guardarCompra = async () => {

        const valida = validator.isAlpha(nombre)

        if(valida){
                setLoading(true)
                const orden = {
                                productos: carrito,
                                usuario: {
                                    nombre,
                                    email: "email@email.com",
                                    telefono: "123456789"
                                },
                                total: 100
                }

                const ordenesCollection = collection(db, "ordenes")

                const referencia = await addDoc(ordenesCollection, orden)

                const id = referencia.id
                setLoading(false)
                setId(id)
                vaciarCarrito()
                setNombre("")
                setError("")
                toast.success("Compra realizada con exito!")
        }else {
            const msg = "El nombre solo puede contener letras"
            setError(msg)
            toast.error(msg)
        }

    }

    const handleChangeNombre = (e) => {
                const valor = e.target.value
                setNombre(valor)
    }

    return (
            <>
            <div>
                <table className="table table-borderless table-dark">
                    <thead>
                    <tr className="text-primary">
                        <th scope="col">Id</th>
                        <th scope="col">Producto</th>
                        <th scope="col">(Stock disponible)</th>
                        <th scope="col">Cantidad solicitada</th>
                        <th scope="col">Precio por unidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                    </thead>
                    <tbody id="contenedor-carrito">
                            {carrito.map(item => (
                            <tr key={item.id}>
                                <th scope="row" className="table__ID">{item.id}</th>
                                <td> {item.title}</td>
                                <td> {item.stock}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.price}</td>
                                <td><button className="btn btnDel btn-outline-dark btn-danger" onClick={() => eliminarProducto(item.id)}>X</button></td>
                            </tr>
                            ))}
                    </tbody>
                </table>
                {error && <p>{error}</p>}
                <button className="btn btnDel btn-outline-dark btn-danger" onClick={() => vaciarCarrito()}>vaciar Carrito</button>
                <div id="totalPrice" className="container">
                <input type="text" onChange={handleChangeNombre} value={nombre} />
                <button id="btnBuy" className="btn btn-outline-dark" onClick={guardarCompra}>Finalizar la compra</button>
                    {loading && <p>Cargando...</p>}
                    {id && <p>Se guardo la compra con id {id}</p>}
                </div>
            </div>
            </>
    )
}

export default memo (Cart)