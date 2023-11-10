import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3xwjbfn",
        "template_urwdwex",
        form.current,
        "uG3JTd_4xaa8JgV7K"
      )
      .then(
        (result) => {
          Swal.fire(
            "Enviado",
            "¡El mensaje ha sido enviado con éxito!",
            "success"
          );
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          Swal.fire("Error", error.text, "error");
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="shadow p-3 mb-3">
        <h4>PARA UNA INMEDIATA ATENCIÓN</h4>
        <h1>
          LLÁMANOS AL{" "}
          <a href="tel:9992516001" className="link-whatsapp">
            <i class="bi bi-telephone-forward"></i> 9992516001 en México
          </a>
        </h1>
      </div>
      <form ref={form} onSubmit={sendEmail} className="shadow p-3">
        <h4>Envíanos un correo</h4>
        <br></br>
        <div className="mb-3">
          <label htmlFor="user_name" className="form-label">
            Tu nombre
          </label>
          <input
            required
            type="text"
            name="user_name"
            id="user_name"
            className="form-control"
          />
        </div>
        <br></br>
        <div className="mb-3">
          <label htmlFor="user_email" className="form-label">
            Tu correo electrónico
          </label>
          <input
            required
            type="email"
            name="user_email"
            id="user_email"
            className="form-control"
          />
        </div>
        <br></br>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Tu mensaje
          </label>
          <textarea
            required
            name="message"
            id="message"
            className="form-control"
            rows={3}
          />
        </div>
        <br></br>
        <div className="form-check mb-3">
          <input
            required
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Acepto conocer las{" "}
            <Link to={"/tratamiento-de-datos"}>Políticas De Privacidad</Link>
          </label>
        </div>
        <br></br>
        <div className="d-grid">
          <input type="submit" value="Enviar" className="btn-custom" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
