import React from 'react';
import PropTypes from 'prop-types';

export const Basic = ({ name }) => (
    <p>Meu nome é {name}</p>
)

Basic.propTypes = {
    name: PropTypes
}

/*
	Curso de Desenvolvimento de aplicações para internet com ReactJS.
	Noções dos Conceitos aplicados a qualidade de código e automação de testes em React:
	Noções de Tratamento de erros.
*/