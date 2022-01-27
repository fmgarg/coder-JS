import { createContext , useState } from "react"
//import { createContext , useCallback, useState } from "react"
export const context = createContext()

const { Provider } = context


const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
  //  const [InCart, setInCart] = useState(false)
    const isInCart = (id) => {
        const found = carrito.find (item => item.id === id);
        return found;  
    }

    const agregarProducto = (producto,cantidad) => {        
        isInCart(producto.id)
        ?
        setCarrito(carrito.map((prod) =>{
            if(prod.id === producto.id){
                prod.cantidad += cantidad
            }
            return prod
        }))
        :
        setCarrito([...carrito,{...producto,cantidad}])        
        
        /*const isInCart =  carrito.find (item => item.id === item.id)
        setInCart(true)

        if (isInCart){
            console.log("ya existe")            
            isInCart.cantidad += cantidad
            setCarrito ([...carrito])
            
        }else{
            
            setCarrito([...carrito,{...producto,cantidad}])
            console.log ("agregado")
            
        }*/

        /*
        if((isInCart(producto.id))||(carrito.length !== 0)){

        console.log("el carrito ya tiene productos")
        //console.log(carrito)
        const realTimeCart = carrito.map (
            item =>{
                const container = {};
                container.id=item.id;
                container.title=item.title;
                container.count=item.count;
                container.price=item.price;
                return container
            }
        )
        console.log(realTimeCart)
        setCarrito([...realTimeCart,{...producto,cantidad}])
        
        }else{
        setCarrito([...carrito,{...producto,cantidad}])
        setCantidad(cantidad)
        console.log ("agregado")
        }
       */
    //console.log(carrito)
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