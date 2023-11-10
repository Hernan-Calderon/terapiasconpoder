import React, { useEffect } from "react";
import introduction2 from "../images/introduction_2.png";
import introduction4 from "../images/introduction_4.png";

function Therapies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container pt-5">
      <h1 className="titulo-uno">Encuentra la Solución a tus Dolencias</h1>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-8">
          <br></br>
          <p>Planes de Salud.</p>
          <p>Nutrición.</p>
          <p>Desintoxicación.</p>
          <p>Inmunidad.</p>
          <p>Hipertensión.</p>
          <p>Obesidad.</p>
          <p>..........</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <img src={introduction4} className="img-fluid" alt="Sanación" />
        </div>
        <div className="col-12 col-md-6 col-lg-8">
          <p>Trabajos de investigación </p>
          <p>LONGEVIDAD</p>
          <p>CLOROFILA</p>
          <p>ALIMENTOS FERMENTADOS</p>
          <p>CRUDIVORISMO</p>
          <p>AYUNOS</p>
          <p>GERMINADOS</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={introduction2}
            className="img-fluid"
            alt="Desintoxicación"
          />
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Therapies;
