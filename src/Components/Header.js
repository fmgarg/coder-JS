import Nav from './NavBar'

//despues del return debe haber algo en la misma linea sino poner entre ()
const Header = () => {
    return <header>
                <div class="encabezado justify-content-center ">
                    <div class="headerTitulo one">
                        <h1>DeTito.com</h1>
                    </div>
                </div>
                <Nav/>
            </header>
}

//exportamos la variable app para que este disponible fuera de App.js

export default Header;