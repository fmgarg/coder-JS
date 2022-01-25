import Header from './Components/Header';

import ItemListContainer from './Components/ItemListContainer';

import ItemDetailContainer from './Components/ItemDetailContainer';

import Cart from './Components/Cart';

import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles/index.css";

import {Routes, Route, BrowserRouter} from 'react-router-dom';

const App = () => {

    return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="category/:id" element={<ItemListContainer/>}/>
                    <Route path="products/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
    )
}

export default App;
