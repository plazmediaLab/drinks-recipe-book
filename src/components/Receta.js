import React, { Fragment, useContext, useState } from "react";
import styled from "@emotion/styled";
import Modal from "react-modal";

// Contex
import { ModalContex } from "../contex/ModalContex";

const DivGrid = styled.div`
  width: 90vw;
  height: 80vh;
  overflow-x: hidden !important;

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }
  p {
    padding: 2rem 2rem 1rem;
  }
  h5 {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 1rem;
    color: var(--plaz-bright);
  }
  ul {
    list-style: none;
    color: var(--secondary-dark);
    margin: 0;
    padding: 0 2rem;
  }

  @media (min-width: 589px) {

    width: 50vw;
  }
`;
const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 1rem 2rem;


  h3 {
    width: 100%;
    margin: 1rem 0;
  }
`;

// MODAL settings
const customStyles = {
  content: {
    border: "none",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "0",
    padding: "0",
    transform: "translate(-50%, -50%)",
    WebkitBoxShadow:
      "0px 8px 25px -6px rgba(0,0,0,0.23), 0px 6px 10px -6px rgba(0,0,0,0.17), 0px 8px 9px 5px rgba(0,0,0,0.05)",
    MozBoxShadow:
      "0px 8px 25px -6px rgba(0,0,0,0.23), 0px 6px 10px -6px rgba(0,0,0,0.17), 0px 8px 9px 5px rgba(0,0,0,0.05)",
    boxShadow:
      "0px 8px 25px -6px rgba(0,0,0,0.23), 0px 6px 10px -6px rgba(0,0,0,0.17), 0px 8px 9px 5px rgba(0,0,0,0.05)"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)"
  }
};
Modal.setAppElement("#root");

const Receta = ({ receta }) => {
  // STATE
  const [modalisopen, guardarModalIsOpen] = useState(false);

  const openModal = () => {
    guardarModalIsOpen(true);
  };
  const closeModal = () => {
    guardarModalIsOpen(false);
  };

  // CONTEX
  const { informacion, guardarIdReceta, guardarInformacion } = useContext(
    ModalContex
  );

  const mostrarIngredientes = info => {
    let ingredientes = [];

    for (let i = 1; i < 16; i++) {
      if (info[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {info[`strIngredient${i}`]} - {info[`strMeasure${i}`]}
          </li>
        );
      }
    }
    console.log(ingredientes);
    return ingredientes;
  };


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
              onClick={() => {
                guardarInformacion({});
                guardarIdReceta(item.idDrink);
                openModal();
              }}
              value={item.idDrink}
            >
              Recipe <i className="a-local_bar"></i>
            </button>
          </div>
        </div>
      ))}
      <Modal
        isOpen={modalisopen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <DivGrid>
          <Header>
            <h3 className="txt-primary">{informacion.strDrink}</h3>
            <button
              onClick={closeModal}
              className="btn btn-s btn-empty-primary br-m"
            >
              <i className="a-clearclose"></i>
            </button>
          </Header>
          <img src={informacion.strDrinkThumb} alt="Thumb test dink" />
          <p className="txt-brand-2">
            <i className="a-bookmarkturned_in txt-secondary"></i> Category:{" "}
            {informacion.strCategory}
            <br />
            <i className="a-local_bar txt-secondary"></i> Type of glass:{" "}
            {informacion.strGlass}
          </p>
          <hr />
          <h5>Ingredients & quantities</h5>
          <ul>{mostrarIngredientes(informacion)}</ul>
          <p className="txt-brand txt-a-j">
            <span className="txt-strong">Instructions:</span>{" "}
            {informacion.strInstructions}
          </p>
        </DivGrid>
      </Modal>
    </Fragment>
  );
};

export default Receta;
