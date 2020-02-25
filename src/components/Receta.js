import React, { Fragment, useContext, useState } from 'react';
// Contex
import {ModalContex} from '../contex/ModalContex';

import Modal from '@material-ui/core/Modal'; 
import { makeStyles } from '@material-ui/core/styles';


function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const Receta = ({receta}) => {

  // useState
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const clases = useStyles()

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  // CONTEX
  const { guardarIdReceta } = useContext(ModalContex);

  return (
    <Fragment>
      {receta.map(item => (
        <div className="card-image-conteiner  box-shadow-s" key={item.idDrink}>
          <div className="card-image__top">
            <img src={item.strDrinkThumb} alt="Thump test" />
            <h3 className="card-image__title">{item.strDrink}</h3>
          </div>
          <div className="card-image__body">
            <button 
              className="btn btn-br btn-100 btn-empty-secondary"
              onClick={
                () => {guardarIdReceta(item.idDrink);
                handleOpen();
              }}
              value={item.idDrink}
            >
              Recipe <i className="a-local_bar"></i>
            </button>
            <Modal
              open={open}
              onClose={() => {
                handleClose();
              }}
            >
              <div style={modalStyle} className={clases.paper}>
                <h1>Hola desde modal</h1>
              </div>
            </Modal>

          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Receta