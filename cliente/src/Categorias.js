import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* import img from "./img/iconos/5ingredientes.png";
import img1 from "./img/iconos/20mins.png"; */
import img2 from "./img/postre.jpg";
import img3 from "./img/vegetaiano.jpg";
import img6 from "./img/mexicano.jpg";
import img7 from "./img/italiano.jpg";

function Categorias() {
  return (
    <div>
      <h2 className="rosa centrar outfit mayor paddTop">Categorias</h2>
      <Row className="categorias">
        <Col xl={3} l={3} md={6} s={12}>
          <Link
            to="/recetas/5_ingredientes"
            className="logo outfit mayor cardCategoria borde"
          >
            <img
              src={img2}
              alt="Icono de la categoría 5 ingredientes o menos"
            />
            <h4>
              5 ingredientes <br></br>o menos
            </h4>
          </Link>
        </Col>
        <Col xl={3} l={3} md={6} s={12}>
          <Link
            to="/20_minutos"
            className="logo outfit mayor cardCategoria borde"
          >
            <img src={img2} alt="Icono de la categoría 20 minutos o menos" />
            <h4>
              20 minutos <br></br>o menos
            </h4>
          </Link>
        </Col>
        <Col xl={3} l={3} md={6} s={12}>
          <Link
            to="/postres"
            className="logo outfit mayor cardCategoria borde pb"
          >
            <img src={img2} alt="Icono de la categoría postres" />
            <h4>Postres </h4>
          </Link>
        </Col>
        <Col xl={3} l={3} md={6} s={12}>
          <Link
            to="/vegetariano"
            className="logo outfit mayor cardCategoria borde pb"
          >
            <img src={img3} alt="Icono de la categoría vegetariano" />
            <h4>Vegetariano</h4>
          </Link>
        </Col>
      </Row>
      <Row className="categorias blanco">
        <Col xl={3} l={3} md={6} s={12}>
          <Link
            to="/bajo_calorias"
            className="logo outfit mayor cardCategoria borde pb"
          >
            <img src={img2} alt="Icono de la categoría bajo en calorias" />
            <h4>Bajo en calorias</h4>
          </Link>
        </Col>
        <Col xl={3} l={3} md={6} s={12}>
          <Link
            to="/alto_proteinas"
            className="logo outfit mayor cardCategoria borde pb"
          >
            <img src={img2} alt="Icono de la categoría alto en proteinas" />
            <h4>Alto en proteinas</h4>
          </Link>
        </Col>
        <Col xl={3} l={3} md={6} s={12}>
          <Link
            to="/mexicano"
            className="logo outfit mayor cardCategoria borde pb"
          >
            <img src={img6} alt="Icono de la categoría mexicano" />
            <h4>Mexicano</h4>
          </Link>
        </Col>
        <Col xl={3} l={3} md={6} s={12}>
          <Link
            to="/italiano"
            className="logo outfit mayor cardCategoria borde pb"
          >
            <img src={img7} alt="Icono de la categoría italiano" />
            <h4>Italiano</h4>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Categorias;
