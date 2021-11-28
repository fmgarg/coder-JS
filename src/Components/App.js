
import Nav from './NavBar';

import ItemListContainer from './ItemListContainer';

import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/index.css";

//3-Necesitamos un componente para mostrar algo como const Componente = React.createComponent ()
const App = () => {
    return (
            <>
            <Nav/>
            <ItemListContainer greeting = "Bienvenidos al e-commerce"/>
            <Footer/>
            </>
)
}

//exportamos la variable app para que este disponible fuera de App.js

export default App;
