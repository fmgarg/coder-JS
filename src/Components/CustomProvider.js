import { createContext , useCallback, useState } from "react"

export const context = createContext()

const { Provider } = context


const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)

    const isInCart = (id) => {}

    const agregarProducto = (producto,cantidad) => {
        isInCart()
        setCarrito([...carrito,{...producto,cantidad}])
        setCantidad(cantidad)
    }

    const eliminarProducto = (id) => {
        setCarrito (carrito.filter ((u) => u.id !== id))
        console.log(eliminarProductoMemorizado)
    }

    const eliminarProductoMemorizado = useCallback (eliminarProducto, [])

    const vaciarCarrito = () => {
        setCarrito([])
        setCantidad(0)
    }

    const valorContexto = { 
        carrito,
        cantidad,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito
     }

    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider