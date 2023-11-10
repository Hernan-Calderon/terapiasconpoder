import React, { useEffect } from "react";
import conference from "../images/conference.png";

function Conferences() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container pt-5">
      <h1 className="titulo-uno">Curamos Todas tus Dolencias</h1>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-9">
          <br></br>
          <p>Talleres.</p>
          <p>Consultas Personales.</p>
          <p>Diagnostico Oriental.</p>
          <p>Iridologia.</p>
          <p>Auditaciones, dianeticas, recomendaciónes</p>
          <p>Dietéticas. </p>
        </div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-9">
          <p>Cambio de estilo de Vida.</p>
          <p>Clases de cocina vegetariana.</p>
          <p>Macrobiótica, de alimentos naturales ( Crudos ).</p>
          <p>Horticultura Ecológica ( Orgánica ).</p>
          <p>
            Proyectos para hoteles Ecoturísticos, Comunidades Ecológicas (
            Ashrams ).
          </p>
          <p>Medicina Alternativa para nuestros Males Presentes y Futuros.</p>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
          <img src={conference} className="img-fluid" alt="presentation" />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-9">
          <p>Vida en el nuevo Milenio y como desaprender lo Obsoleto.</p>
          <p>
            Ecología. Cuan cerca estamos de perder nuestro Planeta - Nave
            Tierra.
          </p>
          <p>Ecología Interior vs Ecología.</p>
          <p>
            Agricultura Residencial, Cultivemos Orgánicamente en nuestros
            Propios hogares.
          </p>
          <p>Cómo lograr que los niños gusten de sus vegetalitos.</p>
          <p>La Biblia como Gran fuente de inspiración cotidiana.</p>
          <p>
            Ejercitemos diariamente nuestros cuerpos. Cómo, por qué y para que.
          </p>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Conferences;
