import React from 'react';

import Nav from './NavBar';

import ItemListContainer from './ItemListContainer';

import ItemDetailContainer from './ItemDetailContainer';


import {Routes, Route} from 'react-router-dom';

const Header = () => {
    return <header>
                <Nav/>
                <div>
                <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                </Routes>
                </div>
            </header>
}

export default Header;