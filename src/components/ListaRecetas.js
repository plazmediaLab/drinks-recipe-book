import React, {useContext} from 'react';
// Contex import
import {RecetasContex} from '../contex/RecetasContex';
// Componemts
import Receta from '../components/Receta';


const ListaRecetas = () => {

  // CONTEX
  const {receta} = useContext(RecetasContex);
  
  if(!receta) return null;

  return (
    <div className="grid-container" id="mansory-layout" columns="4">
      {receta.map(item => (
        <Receta 
          key={item.idDrink}
          receta={receta}
        />
      ))}
    </div>
  );
};

export default ListaRecetas