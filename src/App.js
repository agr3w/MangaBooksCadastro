import './App.css';
import Banner from './Componentes/Banner';
import FormularioEndereco from './Componentes/DadosEndereco';
import './Componentes/DadosPessoais';
import Nav from './Componentes/Navegacao'
import Rodape from './Componentes/Rodape';

function App() {
  return (
   <div>
      <Nav />
      <Banner />
      <FormularioEndereco />
      <Rodape />
   </div>
  );
}

export default App;