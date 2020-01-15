import React from 'react';

// Componente  = função que retorna conteúdo html (não sendo apenas html, css e js)
// Estado
// Propriedade

function Header(props) {
  return (
    <h1>{props.title}</h1>
  );
}

export default Header;
