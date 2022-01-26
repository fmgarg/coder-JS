import { createContext , useState } from "react"
//import { createContext , useCallback, useState } from "react"
export const context = createContext()

const { Provider } = context


const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)

    const isInCart = (id) => {
        const found = carrito.find (item => item.id === id);
        return found;
        
    }

    const agregarProducto = (producto,cantidad) => {
        if (isInCart(producto.id)){
            console.log("ya existe")
            console.log(carrito)
            setCantidad(cantidad)
            carrito [producto.cantidad] = setCantidad
        }else{
        setCarrito([...carrito,{...producto,cantidad}])
        setCantidad(cantidad)
        console.log ("agregado")
        }
    }

    const eliminarProducto = (id) => {
        setCarrito (carrito.filter ((item) => item.id !== id))
    }

    //const eliminarProductoMemorizado = useCallback (eliminarProducto, [])

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