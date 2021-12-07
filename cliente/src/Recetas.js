import { Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

//FontAwesome icons Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faBurn } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

function Recetas(props) {
  if (props.full) {
    /* RECETA COMPLETA */
    return (
      <>
        <div className="top volver ">
          <Link className="sinLinea negro" to="/recetas/5_ingredientes">
            <p className="negroLink">
              <FontAwesomeIcon
                className="rosa marginRignt"
                icon={faChevronCircleLeft}
              />
              Volver al listado de recetas
            </p>
          </Link>
        </div>

        <div className="receta" key={props.nombre}>
          <img src={props.img} alt={props.nombre} />
          <h2 className="rosa">{props.nombre}</h2>
          <div className="flex negro">
            <p className="mRight25">
              <FontAwesomeIcon className="rosa" icon={faClock} /> {props.tiempo}{" "}
              minutos
            </p>
            <p className="mRight25">
              <FontAwesomeIcon className="rosa" icon={faSignal} />{" "}
              {props.dificultad} dificultad
            </p>
            <p className="mRight25">
              <FontAwesomeIcon className="rosa" icon={faBurn} /> {props.kcal}{" "}
              kcal
            </p>
          </div>
          <Tabs
            defaultActiveKey="login"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab className="widthLinea" eventKey="login" title="Ingredientes">
              {/* <p>
            Ingredientes:
            <ul>
              {props.ingredientes.map((ingrediente) => {
                return <li>{ingrediente}</li>;
              })}
            </ul>
          </p> */}
            </Tab>
            <Tab eventKey="Register" title="Pasos">
              <p>Pasos: {props.pasos.paso1}</p>
              <p>Pasos: {props.pasos.paso2}</p>
              <p>Pasos: {props.pasos.paso3}</p>
              <p>Pasos: {props.pasos.paso4}</p>
            </Tab>
          </Tabs>
        </div>
      </>
    );
  } else {
    /* TARJETA EN LISTADO RECETAS */
    return (
      <div className="cardReceta borde " key={props.index}>
        <Link
          className="sinLinea negro"
          to={"/" + props.nombre.replace(/ |[áéíóú]/g, "-")}
        >
          <img src={props.imagen} alt={props.nombre} />
          <h1 className="menor outfit ">{props.nombre}</h1>
        </Link>
      </div>
    );
  }
}

export default Recetas;
