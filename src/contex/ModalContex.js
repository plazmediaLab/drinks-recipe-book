import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear CONTEX
export const ModalContex = createContext();

const ModalProvider = (props) => {

  // STATE
  const [idreceta, guardarIdReceta] = useState(null);
  const [informacion, guardarInformacion] = useState({});

  // useEFFECT
  useEffect(() => {
    const handleReceta = async () => {
      if(!idreceta) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

      const consulta = await axios.get(url);

      guardarInformacion(consulta.data.drinks[0]);
    };
    handleReceta()
  }, [idreceta]);

  return (
    <ModalContex.Provider
      value={{
        informacion,
        guardarIdReceta,
        guardarInformacion
      }}
    >
      {props.children}
    </ModalContex.Provider>
  );
};

export default ModalProvider;