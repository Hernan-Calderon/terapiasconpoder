import React, { useEffect } from "react";
import Imagen from "./Imagen";
import Video from "./Video";

import img1 from "../images/img_1.jpg";
import img2 from "../images/img_2.jpg";
import img3 from "../images/img_3.jpg";
import img4 from "../images/img_4.jpg";
import img5 from "../images/img_5.jpg";
import img7 from "../images/img_6.jpg";

import img11 from "../images/img_11.jpg";
import img12 from "../images/img_12.jpg";
import img13 from "../images/img_13.jpg";
import img14 from "../images/img_14.jpg";
import img15 from "../images/img_15.jpg";
import img16 from "../images/img_16.jpg";
import img17 from "../images/img_17.jpg";
import img18 from "../images/img_18.jpg";
import img19 from "../images/img_19.jpg";
import img20 from "../images/img_20.jpg";
import img21 from "../images/img_21.jpg";
import img22 from "../images/img_22.jpg";
import img23 from "../images/img_23.jpg";

function Gallery() {
  const videosExternos = [
    {
      key: 1,
      src: "https://www.youtube.com/embed/AW2KavRcGl4?si=5AAMnVARqQoGXrMi",
    },
    {
      key: 2,
      src: "https://www.youtube.com/embed/1yyPLew_FFY?si=UxvSnW6bS3lrzxxq",
    },
    {
      key: 3,
      src: "https://www.youtube.com/embed/KLIx4OEtzp0?si=I6vF1HP7G4tI8p12",
    },
    {
      key: 4,
      src: "https://www.youtube.com/embed/SXIyuaGpuVQ?si=1oPQ3G5u56RPb6ts",
    },
    {
      key: 5,
      src: "https://www.youtube.com/embed/wcWLA9K069I?si=ecIgP1MqU0x3iUiD",
    },
    {
      key: 6,
      src: "https://www.youtube.com/embed/1RWJR0tFu7Y?si=fjIsg9fZ4yjsOlUs",
    },
  ];

  const imagenes1 = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img7 },
  ];

  const imagenes2 = [
    { src: img11 },
    { src: img12 },
    { src: img13 },
    { src: img14 },
    { src: img15 },
    { src: img16 },
    { src: img17 },
    { src: img18 },
    { src: img19 },
    { src: img20 },
    { src: img21 },
    { src: img22 },
    { src: img23 },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container pt-5">
      <h1 className="titulo-uno">Galeria</h1>
      <br></br>
      <br></br>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {imagenes1.map((img) => (
          <Imagen key={img.src} src={img.src} />
        ))}
      </div>
      <br></br>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {videosExternos.map((video) => (
          <Video key={video.key} src={video.src} />
        ))}
      </div>
      <br></br>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {imagenes2.map((img) => (
          <Imagen key={img.src} src={img.src} />
        ))}
      </div>

      <br></br>
    </div>
  );
}

export default Gallery;
