import React from "react";

function Imagen({ src }) {
  return (
    <div className="col">
      <img src={src} className="img-fluid" alt="Imagen Galería Puhma" />
    </div>
  );
}

export default Imagen;
