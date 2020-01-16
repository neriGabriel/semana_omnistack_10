//importa o react em todo arquivo js que for usar html
import React from 'react';
//react dom 
import ReactDOM from 'react-dom';
import App from './App';


//renderiza o <app /> na tela principal
ReactDOM.render(<App />, document.getElementById('root'));

//JSX (javascript + html) e.g: <App />