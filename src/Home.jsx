import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <p>Olá! Selecione uma aula abaixo :D</p>
    <Link to="/modulo_01">modulo_01</Link><br/>
    <Link to="/modulo_02">modulo_02</Link><br/>
    <Link to="/modulo_03">modulo_03</Link><br/>
    <Link to="/modulo_04">modulo_04</Link>
  </>
)

export default Home;
