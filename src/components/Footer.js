import React from "react";
import cierre from "../images/cierre.gif";

function Footer() {
  return (
    <div>
      <footer
        className="text-white"
        style={{ backgroundColor: "rgb(123, 0, 157)" }}
      >
        <section className="container d-flex justify-content-center pt-4">
          <div className="me-5 d-none d-lg-block">
            <span>Conéctese a nuestras redes sociales:</span>
          </div>
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=61551729756782"
              className="me-4 text-reset"
            >
              <i className="bi bi-facebook"></i>
            </a>

            <a
              href="https://www.instagram.com/puhmaabraham/?igshid=MzRlODBiNWFlZA%3D%3D"
              className="me-4 text-reset"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://wa.me/529992516001?text=Me%20interesa%20el%20servicio"
              className="me-4 text-reset"
            >
              <i className="bi bi-whatsapp"></i>
            </a>

            <a
              href="https://www.youtube.com/@PuhmaAbraham"
              className="me-4 text-reset"
            >
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </section>
        <hr />
        <section>
          <div className="container text-center text-md-start">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-4 mb-4">
                <img src={cierre} className="img-fluid" alt="cierre" />
              </div>

              <div className="col-12 col-sm-6 col-lg-4 mb-4">
                <p className="h5">Contacto</p>
                <br></br>
                <p>
                  <i className="bi bi-house-door"></i> Mérida Yucatán México
                </p>
                <p>
                  <a href="tel:9992516001" className="link-whatsapp-white">
                    <i class="bi bi-telephone-forward"></i> 9992516001 en México
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/529992516001?text=Me%20interesa%20el%20servicio"
                    className="link-whatsapp-white"
                  >
                    <i className="bi bi-whatsapp"></i> Whatsapp
                  </a>
                </p>
                <p>
                  <i className="bi bi-envelope"></i>{" "}
                  contactopuhmaabraham@gmail.com
                </p>
              </div>
              <div className="col-12 col-sm-12 col-lg-4 mb-4">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42149.67780643974!2d-89.64492950507865!3d20.9709653016798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5673b086a4d581%3A0x7c9fac8083f2ed1!2zOTcwMDAgTcOpcmlkYSwgWXVjLiwgTcOpeGljbw!5e0!3m2!1ses-419!2sco!4v1696190081760!5m2!1ses-419!2sco"
                    title="Mapa Puhma Abraham"
                    style={{ border: "0" }}
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-3" style={{ backgroundColor: "#491632" }}>
          © 2023 Copyright:
          <span> TerapiasConPoder</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
