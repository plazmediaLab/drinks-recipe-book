import React, { useContext, Fragment } from 'react';
// Import Contex
import {RecetasContex} from '../contex/RecetasContex';;


const Receta = () => {

  // CONTEX
  const {receta} = useContext(RecetasContex);

  return (
    <Fragment>
      {receta.map(item => (
        <div className="card-image-conteiner" key={item.idDrink}>
          <div className="card-image__top">
            <img src={item.strDrinkThumb} alt="Thump test" />
            <h3 className="card-image__title">{item.strDrink}</h3>
          </div>
          <div className="card-image__body">
            <a className="btn btn-br btn-100 btn-empty-secondary">
              Recipe <i className="a-local_bar"></i>
            </a>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Receta