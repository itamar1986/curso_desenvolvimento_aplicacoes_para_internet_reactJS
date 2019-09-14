export const soma = (a, b) => a + b;

export const somaSegura = (a, b) => {
    if (typeof a === number && typeof b === number) {
        return a + b;
    } else {
        // vamos convencionar -1 quando a soma for inválida 
        return -1;
    }
}

/*
	Curso de Desenvolvimento de aplicações para internet com ReactJS.
	Noções dos Conceitos aplicados a qualidade de código e automação de testes em React:
	Noções de Tratamento de erros.
*/