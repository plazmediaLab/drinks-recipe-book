import React, { useContext, useState } from "react";
// Contex
import { CategoriasContex } from "../contex/CategoriasContex.js";
import { RecetasContex } from "../contex/RecetasContex.js";

const Formulario = ({ guardarError }) => {
  // STATE
  const [busqueda, gusardarBusqueda] = useState({
    ingrediente: "",
    categoria: ""
  });

  // CONTEX
  const { categorias } = useContext(CategoriasContex);
  const { guardarBusqueda } = useContext(RecetasContex);

  const handleDatosReceta = e => {
    gusardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  // Submit
  const DatosSubmit = e => {
    e.preventDefault();

    if (busqueda.ingrediente === "" || busqueda.categoria === "") {
      // Activar Error
      guardarError(true);
      return;
    }
    // Desactivar Error
    guardarError(false);

    // Mandar datos al CONTEX de Recetas
    guardarBusqueda(busqueda);
  };

  return (
    <form className=" vm-4" onSubmit={DatosSubmit}>
      <h3 className="txt-a-c font-1 txt-primary">
        Search by ingredient or category
      </h3>
      <hr className="vm-4" />
      <div className="col-row gap-1">
        <div className="col-4">
          <input
            type="text"
            className="input-100"
            name="ingrediente"
            placeholder="Search by ingradient"
            onChange={handleDatosReceta}
          />
        </div>
        <div className="col-4">
          <select
            className="input-100"
            name="categoria"
            onChange={handleDatosReceta}
            value={busqueda.categoria}
          >
            <option value="">-- Select category --</option>
            {categorias.map(item => (
              <option key={item.strCategory} value={item.strCategory}>
                {item.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-100 btn-secondary">
            Search drink
          </button>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
