import React from "react";

function Video({ src }) {
  return (
    <div className="col">
      <div className="ratio ratio-16x9 shadow">
        <iframe
          src={src}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ border: "0" }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
