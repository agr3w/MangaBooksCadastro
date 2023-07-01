import React, { useState } from "react";
import "./endereco.css";

const FormularioEnderecos = () => {
  const [cadastro, setCadastro] = useState({
    nomeCompleto: "",
    nascimento: "",
    contato: "",
    email: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const [contaCriada, setContaCriada] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "contato") {
      // Remove todos os caracteres não numéricos do valor
      newValue = value.replace(/\D/g, "");
    }

    setCadastro((prevCadastro) => ({ ...prevCadastro, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cadastro);
    setContaCriada(true);
  };

  return (
    <div>
      {!contaCriada ? (
        <div>
          <div className="formulario-pessoal">
            <h2 className="formulario-titulo">Dados de Cadastro</h2>
            <h3 className="formulario-subtitulo">Dados Pessoais</h3>
            <form onSubmit={handleSubmit}>
              <div className="campo">
                <label htmlFor="nomeCompleto">Nome Completo</label>
                <input
                  type="text"
                  id="nomeCompleto"
                  name="nomeCompleto"
                  value={cadastro.nomeCompleto}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="campo-group">
                <div className="campo campo-pequeno">
                  <label htmlFor="nascimento">Nascimento</label>
                  <input
                    type="date"
                    id="nascimento"
                    name="nascimento"
                    value={cadastro.nascimento}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="campo campo-pequeno">
                  <label htmlFor="contato">Contato</label>
                  <input
                    type="text"
                    id="contato"
                    name="contato"
                    value={cadastro.contato}
                    onChange={handleChange}
                    required
                    placeholder="(xx) xxxxx-xxxx"
                  />
                </div>
              </div>
              <div className="campo">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={cadastro.email}
                  onChange={handleChange}
                  required
                  placeholder="email@seudominio.com"
                />
              </div>

              <div className="formulario-endereco">
                <h3>Endereço</h3>
                <div className="campo">
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    value={cadastro.cep}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="campo">
                  <label htmlFor="endereco">Endereço</label>
                  <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    value={cadastro.endereco}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="campo">
                  <label htmlFor="numero">Número</label>
                  <input
                    type="text"
                    id="numero"
                    name="numero"
                    value={cadastro.numero}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="campo">
                  <label htmlFor="complemento">Complemento</label>
                  <input
                    type="text"
                    id="complemento"
                    name="complemento"
                    value={cadastro.complemento}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="campo">
                  <label htmlFor="bairro">Bairro</label>
                  <input
                    type="text"
                    id="bairro"
                    name="bairro"
                    value={cadastro.bairro}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="campo-group">
                  <div className="campo campo-pequeno">
                    <label htmlFor="cidade">Cidade</label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={cadastro.cidade}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="campo campo-pequeno">
                    <label htmlFor="uf">UF/Estado</label>
                    <input
                      type="text"
                      id="uf"
                      name="uf"
                      value={cadastro.uf}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="botao-submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="conta-criada">
          <h2 className="mensagem-conta">Conta criada!</h2>
          <div className="dados-formulario">
            <h3>Dados do formulário:</h3>
            <p>Nome Completo: {cadastro.nomeCompleto}</p>
            <p>Nascimento: {cadastro.nascimento}</p>
            <p>Contato: {cadastro.contato}</p>
            <p>E-mail: {cadastro.email}</p>
            <p>CEP: {cadastro.cep}</p>
            <p>Endereço: {cadastro.endereco}</p>
            <p>Número: {cadastro.numero}</p>
            <p>Complemento: {cadastro.complemento}</p>
            <p>Bairro: {cadastro.bairro}</p>
            <p>Cidade: {cadastro.cidade}</p>
            <p>UF/Estado: {cadastro.uf}</p>
          </div>
          <h3 className="mensagem-conta"> Caso queira atualizar alguma informação, entre na aba "Meu perfil" e atualize. </h3>
        </div>
      )}
    </div>
  );
};

export default FormularioEnderecos;
