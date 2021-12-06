import Header from './Components/Header';

//import Nav from './Components/NavBar';

import ItemListContainer from './Components/ItemListContainer';

import Footer from './Components/Footer';

import  Button  from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles/index.css";

//3-Necesitamos un componente para mostrar algo como const Componente = React.createComponent ()
const App = () => {

    const producto = {titulo:"Producto 1"}

    const saludo = "Hola Mundo"

    return (
            <>
            <Header/>
            <ItemListContainer producto={producto}/>
            <Button variant="primary">Agregar</Button>
            <Footer saludo={saludo}/>
            </>
    )
}

//exportamos la variable app para que este disponible fuera de App.js

export default App;
