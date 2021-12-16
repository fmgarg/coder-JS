import Header from './Components/Header';

import ItemListContainer from './Components/ItemListContainer';

import ItemDetailContainer from './Components/ItemDetailContainer';

import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles/index.css";

import {BrowserRouter} from 'react-router-dom';

import {Routes, Route} from 'react-router-dom';


const App = () => {

    return (
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:id" element={<ItemListContainer/>}/>
            </Routes>
            <Footer/>
            </BrowserRouter>
    )
}

export default App;
