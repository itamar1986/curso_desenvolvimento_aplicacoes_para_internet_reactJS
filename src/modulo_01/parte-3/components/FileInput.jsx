import React from 'react';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Arquivo selecionado - ${
        this.fileInput.current.files[0].name
      }`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          Upload de arquivo:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default FileInput;

/*
	Curso de Desenvolvimento de aplicações para internet com ReactJS.
	Noções de estilos em elementos e componentes:
	noções referente a Introdução em Formulários no ReactJS
*/