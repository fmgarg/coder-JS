const Nav = () => {
    return (         
                <nav class="aboutusHeader__nav navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav navbar-nav-scroll">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Acerca de nosotros<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Productos y servicios
                                </a>
                                    <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Electrodomésticos</a></li>
                                            <li><a class="dropdown-item" href="#">Bazar</a></li>
                                            <li><a class="dropdown-item" href="#">Muebles</a></li>
                                            <li><a class="dropdown-item" href="#">Envíos</a></li>
                                            <li><a class="dropdown-item" href="#">Servicios</a></li>
                                    </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contactenos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Proveedores</a>
                            </li>
                        </ul>
                </div>
            </nav>
            )
}

//exportamos la variable app para que este disponible fuera de App.js

export default Nav;