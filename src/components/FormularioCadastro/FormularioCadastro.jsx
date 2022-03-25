import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _CriarNota(evento) {
        evento.preventDefault(); // prevenir o reload
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }
    render() {
    return (
      <form className="form-cadastro"
      onSubmit={this._CriarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;