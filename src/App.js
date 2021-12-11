import Header from './Components/Header';

import ItemListContainer from './Components/ItemListContainer';

import ItemDetailContainer from './Components/ItemDetailContainer';

import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles/index.css";

const App = () => {

    return (
            <>
            <Header/>
            <ItemListContainer/>
            <ItemDetailContainer/>
            <Footer/>
            </>
    )
}

export default App;
