import img from "../img/rrss.png";

function Footer() {
  return (
    <footer className="blanco">
      <div>
        <h4>Cook Lover</h4>
        <p>Recetario online gratuito</p>
      </div>
      <div>
        <p className="bold">Contacto</p>
        <p>
          Contacta con nosotros en<br></br>cookeasy@gmail.com
        </p>
      </div>
      <div>
        <p className="bold">Seguridad y privacidad</p>
        <p>
          Términos y condiciones<br></br>Política de privacidad
        </p>
      </div>
      <div>
        <p className="bold">Buscanos en:</p>
        <img src={img} alt="Iconos de redes sociales" />
      </div>
    </footer>
  );
}

export default Footer;
