import React, {useState} from 'react';
// Contex
import CategoriasProvider from './contex/CategoriasContex.js';
import RecetasProvider from './contex/RecetasContex.js';
// Components
import Cubetron from './components/Cubetron';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

function App() {
  
  // STATE
  const [error, guardarError] = useState(false);

  return (
    <CategoriasProvider>
      <RecetasProvider>

        <Cubetron />

        <div className="container">
          <Formulario 
            guardarError={guardarError}
          />

          {error ? <p className="msn msn-s-cancel"><i className="a-warning"></i>&nbsp; All fields are requires</p> : null}

          <hr />

          <ListaRecetas />
          
        </div>

      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
