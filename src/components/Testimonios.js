import React, { useEffect } from "react";

function Testimonios() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container pt-5">
      <h1 className="titulo-uno">Activa tu Poder</h1>
      <br></br>
      <br></br>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <iframe
            src="https://podcasters.spotify.com/pod/show/puhma-abraham/embed/episodes/Cmo-podemos-sanar-e2bf534"
            height="102px"
            frameborder="0"
            scrolling="no"
            title="Audio 1"
          ></iframe>
        </div>
        <div className="col">
          <iframe
            src="https://podcasters.spotify.com/pod/show/puhma-abraham/embed/episodes/Universo-Sanador-e2bf5j3/a-aaiht85"
            height="102px"
            frameborder="0"
            scrolling="no"
            title="Audio 2"
          ></iframe>
        </div>
        <div className="col">
          <iframe
            src="https://podcasters.spotify.com/pod/show/puhma-abraham/embed/episodes/Enfermedades-e2bf5pt/a-aaihtpd"
            height="102px"
            frameborder="0"
            scrolling="no"
            title="Audio 3"
          ></iframe>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Testimonios;
