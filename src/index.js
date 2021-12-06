//0-Su ejecuto npm start este index.js no se recarga auto.
//1-Necesitamos React
import React from 'react';
//2-Necesitamos a ReactDom
import ReactDOM  from 'react-dom';
//3-Necesitamos un componente para mostrar algo como const Componente = React.createComponent ()
//const App = () => {
//  return <p>Hola Mundo</p>
//}
import App from './App';
//4-Necesitamos mostrar el componente/ dibujar (llama al componente con sintaxis JSX seudo etiqueta html que se autocierra , en que elem del DOM voy a levantar la aplicacion)
ReactDOM.render (<App/>, document.getElementById ('root'));
