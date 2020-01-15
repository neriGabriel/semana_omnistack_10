import React, { useState, useEffect } from 'react';
import api from './services/api';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente   = função que retorna conteúdo html (não sendo apenas html, css e js), não interfere no restante da aplicação
// Estado       = informações mantidas pelo componente (lembrar: imutabilidade)
// Propriedade  = informações que um componente PAI passa para o componente filho, pode usar funcao, variavel e etc.
// Toda função que é do proprio componente é criado dentro dele mesmo

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }

  return (
    <div id='app'>
      <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
          <ul>
            {devs.map(dev => (
              <DevItem key={dev._id} dev={dev} />
            ))}
          </ul>
      </main>
    </div>
  );
}

export default App;
