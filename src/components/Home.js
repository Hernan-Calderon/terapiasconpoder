import React, { useEffect } from "react";

import terapias from "../images/terapias.gif";
import tsaludable from "../images/tsaludable.png";
import tmedicinal from "../images/tmedicinal.png";
import tnatural from "../images/tnatural.png";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <img src={terapias} className="img-fluid" alt="terapias con jugos" />
      <br></br>
      <h1 className="titulo-uno">Encuentra la Salud con mis Terapias</h1>
      <h2 className="titulo-dos">Club de la Salud</h2>
      <br></br>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card text-center h-100 shadow">
            <img src={tsaludable} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="titulo-tres">Medicina Verde</h3>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-center h-100 shadow">
            <img src={tmedicinal} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="titulo-tres">Medicina Espiritual</h3>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-center h-100 shadow">
            <img src={tnatural} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="titulo-tres">Medicina Natural Tradicional</h3>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Home;
