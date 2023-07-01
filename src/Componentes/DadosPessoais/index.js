import './dados1.css'

const FormularioPessoal = () => {
  return (
    <div className="formulario-pessoal">
      <h2 className="formulario-titulo">Dados de Cadastro</h2>
      <h3 className="formulario-subtitulo">Dados Pessoais</h3>
      <form>
        <div className="campo">
          <label htmlFor="nomeCompleto">Nome Completo</label>
          <input type="text" id="nomeCompleto" />
        </div>
        <div className="campo-group">
          <div className="campo campo-pequeno">
            <label htmlFor="nascimento">Nascimento</label>
            <input type="date" id="nascimento" />
          </div>
          <div className="campo campo-pequeno">
            <label htmlFor="contato">Contato</label>
            <input type="text" id="contato" />
          </div>
        </div>
        <div className="campo">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" />
        </div>
      </form>
    </div>
  );
}

export default FormularioPessoal;