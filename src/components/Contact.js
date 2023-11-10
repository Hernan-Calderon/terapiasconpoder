import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import contacto from "../images/contacto.png";
import contacto1 from "../images/contacto1.gif";
import contacto2 from "../images/contacto2.gif";
import contacto3 from "../images/contacto3.gif";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container pt-5">
      <h1 className="titulo-uno">Contacto</h1>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-12 col-md-5 col-lg-4">
          <div
            className="card text-center h-100 shadow"
            style={{
              backgroundColor: "rgb(123, 0, 157)",
            }}
          >
            <img src={contacto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="titulo-cuatro">RENOVACIÓN CELULAR</h3>
              <p className="titulo-cuatro">
                La Única Posible Solución a nuestros males, Presentes y Futuros.
                Cómo Evolucionar a través de la renovación celular Y convertirse
                en la Persona que siempre quiso ser. Centro Agroecológico.
                Tunkas YUCATÁN. Medicina Verde. Medicina Espiritual. Medicina
                Natural Tradicional.
              </p>
              <a
                href="https://wa.me/529992516001?text=Me%20interesa%20el%20servicio"
                className="btn-white"
              >
                <i className="bi bi-whatsapp"></i> Whatsapp
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-8">
          <ContactForm />
        </div>
      </div>
      <br></br>
      <h1 className="titulo-dos">Terapias con Poder</h1>
      <br></br>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <img src={contacto1} className="img-fluid" alt="short1" />
          <h3 className="titulo-dos pt-4">Poder para Sanar</h3>
        </div>
        <div className="col">
          <img src={contacto2} className="img-fluid" alt="short2" />
          <h3 className="titulo-dos pt-4">Poder para Curar</h3>
        </div>
        <div className="col">
          <img src={contacto3} className="img-fluid" alt="short3" />
          <h3 className="titulo-dos pt-4">Poder para Crear</h3>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Contact;
