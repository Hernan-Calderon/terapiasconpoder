import React from "react";

function SocialButtons() {
  return (
    <div className="social-buttons">
      <a
        href="https://www.facebook.com/profile.php?id=61551729756782"
        className="btn-facebook shadow"
      >
        <h4>
          <i className="bi bi-facebook"></i>
        </h4>
      </a>

      <a
        href="https://www.instagram.com/puhmaabraham/?igshid=MzRlODBiNWFlZA%3D%3D"
        className="btn-instagram shadow"
      >
        <h4>
          <i className="bi bi-instagram"></i>
        </h4>
      </a>

      <a href="tel:9992516001" className="btn-phone shadow">
        <h4>
          <i class="bi bi-telephone-forward"></i>
        </h4>
      </a>

      <a
        href="https://wa.me/529992516001?text=Me%20interesa%20el%20servicio"
        className="btn-whatsapp shadow"
      >
        <h4>
          <i className="bi bi-whatsapp"></i>
        </h4>
      </a>

      <a
        href="https://www.youtube.com/@PuhmaAbraham"
        className="btn-youtube shadow"
      >
        <h4>
          <i className="bi bi-youtube"></i>
        </h4>
      </a>
    </div>
  );
}

export default SocialButtons;
