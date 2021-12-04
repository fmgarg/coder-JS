import Header from './Header';

//import Nav from './Components/NavBar';

import ItemListContainer from './ItemListContainer';

import Footer from './Footer';

import  Button  from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/index.css";
import { useState } from 'react';




//3-Necesitamos un componente para mostrar algo como const Componente = React.createComponent ()
const App = () => {

    const producto = {titulo:"Producto 1"}
    const saludo = "Hola Mundo"
    
    const [contador , setcontador] = useState (0)
    let init = 0
    useState(init)

    const aumentarContador = () =>{
        console.log("Aumentar contador")
        setcontador (contador+1)
    }

    return (
            <>
            <Header  saludo={saludo}/>
            <ItemListContainer>
                <h1>Test props</h1>
                <p>El contador va: {contador}</p>
                <button onClick={aumentarContador}>aument</button>

            </ItemListContainer>
            <Button variant="primary">Agregar</Button>
            <Footer saludo={saludo}/>
            </>
    )
}

//exportamos la variable app para que este disponible fuera de App.js

export default App;
