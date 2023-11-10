import React, { useEffect } from "react";
import Imagen from "./Imagen";

import club1 from "../images/club_1.jpg";
import club2 from "../images/club_2.jpg";
import club3 from "../images/club_3.jpg";
import club4 from "../images/club_4.jpg";
import club5 from "../images/club_5.jpg";
import club6 from "../images/club_6.jpg";
import club7 from "../images/club_7.jpg";
import club8 from "../images/club_8.jpg";
import club9 from "../images/club_9.jpg";

function ClubSalud() {
  const imgClub = [
    { src: club1 },
    { src: club2 },
    { src: club3 },
    { src: club4 },
    { src: club5 },
    { src: club6 },
    { src: club7 },
    { src: club8 },
    { src: club9 },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container pt-5">
      <h1 className="titulo-uno">Haz Parte del Club de la Salud</h1>
      <h2 className="titulo-dos">Tu Sinceridad puede cambiar vidas.</h2>
      <h2 className="titulo-dos">Cuéntanos tus Dolencias</h2>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-12 col-md-1"></div>
        <div className="col-12 col-md-10">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/WOGEDu-f4Pw?si=mjyRGWHpi5EFjfuY"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{ border: "0" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <br></br>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {imgClub.map((img) => (
          <Imagen key={img.src} src={img.src} />
        ))}
      </div>
      <br></br>
      <p>
        Este muy actual y Ecológico Club de Amigos de la tierra es la adecuada a
        los incognitos, preocupaciones, abandono o no saber que hacer para dar
        comienzo y continuación aún pequeño aporte en la labor de mejorar
        nuestro medio ambiente desde su casa en adelante.
      </p>
      <p>
        Contribuyendo así a la Gran tarea, ya en marcha en muchos países, del
        mejoramiento ambiental.
      </p>
      <p>
        La Gran crisis Ecológica, la degradación alarmante del entorno a escala
        mundial, la crisis alimentaria, la contaminación de aguas, aires,
        suelos, etc.
      </p>
      <p>
        Está Realidad nos obliga e impele a contribuir con nuestros esfuerzos y
        voluntades para un mejor entorno en nuestro Planeta tierra 🌎 ya que
        todos unidos SI PODEMOS.
      </p>
      <p>
        Este Club de Amigos de la Salud, desde el principio la primera labor o
        tarea qué haremos será la de empezar a ordenar, nuestro propio espacio
        vital mejorando su calidad, eficiencia, estética, funcionalidad etc.
      </p>
      <p>
        Practicaremos lo que el Dr Puhma ha dado en llamar Agricultura
        Residencial, continuaremos con el reciclaje en sus variados aspectos o
        faces, tales cómo, composteo de biomasa, desechos Orgánicos.
      </p>
      <p>
        Con la agricultura orgánica residencial lograremos aumentar la
        producción de vegetales completamente Orgánicos para nuestro
        autoconsumo.
      </p>

      <p>Una muestra al material que estaremos expuestos serán tales cómo:</p>
      <p>1. Agricultura Orgánica .</p>
      <p>2. Reciclaje ♻️ limpieza, descacharizacion.</p>
      <p>3. Injertos, diferentes tipos de reproducción vegetariana.</p>
      <p>
        4. Semillas Criollas: recolección, reproducción y conservación para
        futuro uso.
      </p>
      <p>5. Plantas de ornato, su producción.</p>
      <p>6. Meliponarios.</p>
      <p>7. Abonos ( fertilizantes naturales, su elaboración ).</p>
      <p>8. Hidroponía Orgánica.</p>
      <p>
        9. Agricultura Aérea en techos, azoteas, bardas, postes, tutores, etc.
      </p>
      <p>10. Vermicomposteo.</p>
      <p>
        11. Irrigación, sistemas, utilización y almacenaje de las aguas de
        lluvia.
      </p>
      <p>12. Las fases de la luna y la agricultura Orgánica.</p>
      <p>13. Control biológico de insectos.</p>
      <p>14. Producción de plaguicidas Orgánicos.</p>
      <p>15. Mulching múltiples usos y variedades.</p>
      <p>16. Control del PH de los suelos</p>
      <p>17. Estiércoles varios, recolección, fermentación composteo, etc.</p>
      <p>18. Preparación culinaria adecuada de lo cosechado.</p>
      <p>
        19. Planificación de la producción de acuerdo a las necesidades propias
        y comercialización de los excedentes .
      </p>
      <br></br>
    </div>
  );
}

export default ClubSalud;
