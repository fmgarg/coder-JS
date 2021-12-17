import React from 'react';

import CartWidget from './CartWidget'

const Nav = () => {
    return (         
                <nav className="aboutusHeader__nav navbar navbar-expand-lg navbar-light">
                <div className="encabezado justify-content-center ">
                    <div className="headerTitulo one">
                        <h1>DeTito.com</h1>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inicio<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Acerca de nosotros<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Productos y servicios
                                </a>
                                    <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Electrodomésticos</a></li>
                                            <li><a className="dropdown-item" href="#">Bazar</a></li>
                                            <li><a className="dropdown-item" href="#">Muebles</a></li>
                                            <li><a className="dropdown-item" href="#">Envíos</a></li>
                                            <li><a className="dropdown-item" href="#">Servicios</a></li>
                                    </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contactenos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Proveedores</a>
                            </li>
                        </ul>
                </div>
                <div>
                <CartWidget/>
                </div>
            </nav>
            )
}

//exportamos la variable app para que este disponible fuera de App.js

export default Nav;