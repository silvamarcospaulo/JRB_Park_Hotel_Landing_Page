import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './index';
import Acomodacoes from './Acomodacoes';
import Servicos from './Servicos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acomodacoes" element={<Acomodacoes />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </Router>
  );
}

export default App;