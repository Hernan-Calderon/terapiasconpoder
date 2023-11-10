import React, { useEffect } from "react";

function Data() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container pt-5">
      <h1 className="titulo-uno">Políticas De Privacidad</h1>
      <br></br>
      <br></br>
      <p>
        <b>DR PUHMA ABRAHAM</b> en cumplimiento a lo establecido por la Ley
        Federal de Protección de Datos Personales en Posesión de los
        Particulares (la “Ley”) y con la finalidad de garantizar la privacidad y
        el derecho a la autodeterminación informativa de sus clientes, hace de
        su conocimiento la política de privacidad y manejo de datos personales.
      </p>
      <br></br>
      <h5>I. Recabación de datos</h5>
      <p>
        Personales. En la venta de productos y prestación de servicios,{" "}
        <b>DR PUHMA ABRAHAM</b> requerirá a sus clientes los siguientes datos:
        Nombre, Teléfono y correo electrónico.
      </p>
      <br></br>
      <h5>II. Finalidad del tratamiento de datos</h5>
      <p>
        Personales. Utilizaremos los datos que el cliente nos proporcione: (i)
        con fines comerciales para vender y/o contactarlo y enviarle información
        respecto los productos y los servicios.
      </p>
      <br></br>
      <h5>III. Transferencias de datos</h5>
      <p>
        Personales. Excepto por aquellos datos personales que se recaben para la
        promoción de productos y/o servicios de terceros distintos a{" "}
        <b>DR PUHMA ABRAHAM</b>, no divulgará ni compartirá con terceros los
        datos personales que recabe de sus clientes. Respecto los datos
        personales que recabe <b>DR PUHMA ABRAHAM</b> para que un tercero pueda
        promocionar con estos sus productos y/o servicios.
      </p>
      <p>
        <b>DR PUHMA ABRAHAM</b>: (i) lo comunicará a sus clientes, quienes, de
        no estar interesados en el producto y/o servicio del tercero podrán
        negarse a entregar sus datos y ser contactados por dicho tercero, (ii)
        firmará un contrato con dicho tercero para que este, en la prestación de
        sus servicios, (1) instaure las medidas de seguridad necesarias para
        garantizar un nivel de protección adecuado respecto los datos personales
        de los clientes y (2) limite el uso de los datos para la finalidad con
        que le fueron entregados por <b>DR PUHMA ABRAHAM</b> es decir, con fines
        de promoción. En caso de que ese tercero llegue a contactar al cliente y
        recabe de este más información o datos a los transmitidos por{" "}
        <b>DR PUHMA ABRAHAM</b>, dicho tercero será responsable del tratamiento
        que dé a esos datos.
      </p>
      <br></br>
      <h5>
        IV. Medios para ejercer los derechos de acceso, rectificación,
        cancelación u oposición
      </h5>
      <p>
        Todo cliente/paciente de <b>DR PUHMA ABRAHAM</b> interesado en ejercer
        los derechos previstos en la Ley, podrá hacerlo poniéndose en contacto
        con la Subdirección de Mercadotecnia y Servicio al Cliente de{" "}
        <b>DR PUHMA ABRAHAM</b>, ubicada en <b>Mérida Yucatán México</b>.
        Teléfono <b>+52 999 115 3164</b> o enviando un correo electrónico a la
        siguiente dirección: <b>contactopuhmaabraham@gmail.com</b>
      </p>
      <br></br>
      <h5>V. Cambios al Aviso de Privacidad</h5>
      <p>
        Cualquier cambio a este Aviso de Privacidad se hará del conocimiento de
        los clientes de <b>DR PUHMA ABRAHAM</b>, a través del sitio web{" "}
        <b>terapiasconpoder.com</b>
      </p>
      <br></br>
    </div>
  );
}

export default Data;
