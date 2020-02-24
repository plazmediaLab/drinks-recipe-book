import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';


export const RecetasContex = createContext();

const RecetasProvider = (props) => {

  // STATE
  const [receta, guardarReceta] = useState([]);
  const [busqueda, guardarBusqueda] = useState({
    ingradiente: '',
    categoria: ''
  });

  
  // useEffect
  useEffect(() => {
    const {ingrediente, categoria} = busqueda

    if(ingrediente === '' || categoria === '') return;

    const handleRecetas = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`

      const consulta = await axios.get(url);

      // Guardar Resultados
      guardarReceta(consulta.data.drinks);
    }
    handleRecetas()
  }, [busqueda])

  return (
    <RecetasContex.Provider
      value={{
        receta,
        guardarBusqueda
      }}
    >
      {props.children}
    </RecetasContex.Provider>
  );
};

export default RecetasProvider;