import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';


//? Creamos el CONTEX
export const CategoriasContex = createContext();

//? Siempre que se utilice contex, tenemos que crear el PROVIDER

// ------------------------------------------------------------------
//* Provider es en donde se encuentran las FUNCIONES y el STATE
//* 1- Siempre es una arrow function
//* 2- Siempre lleva como parametro (props)
//* 3- Crear el state del contex
//* 3- Todo lo que este el el "return" es la información que fluirá
//* a los demas comopnentes hijos
//* 5- la propiedad "value" de ".Provider" son datos axcecibles para 
//* los demas componentes
// ------------------------------------------------------------------

const CategoriaProvider = (props) => {

  // State del contex
  const [categorias, guardarCategorias] = useState([]);

  // UseEffect
  useEffect(() => {
    const obtenerCategorias = async () =>{
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const respuesta = await axios.get(url)
      guardarCategorias(respuesta.data.drinks);
    }
    obtenerCategorias()
  }, [/* dependencia */]);

  return (
    <CategoriasContex.Provider
      value={{
        categorias,
      }}
    >
      {props.children}
    </CategoriasContex.Provider>
  )

}


export default CategoriaProvider;