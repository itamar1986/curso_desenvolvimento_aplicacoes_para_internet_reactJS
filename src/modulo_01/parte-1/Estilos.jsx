import React from 'react';
import Inline from './componentes/Inline';
import ClassName from './componentes/ClassName';
import Styled from './componentes/Styled';

const Estilos = () => (
  <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <Inline />
    <ClassName />
    <Styled />
  </div>
);

export default Estilos;

/*
	Curso de Desenvolvimento de aplicações para internet com ReactJS.
	Noções de estilos em elementos e componentes:
	Noções sobre estilização de componentes e elementos CSS.
*/