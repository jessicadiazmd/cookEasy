import { Link } from "react-router-dom";

//Bootstrap Import
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

//FontAwesome icons Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faBurn } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

function Recetas(props) {
  /* RECETA COMPLETA EN UNA SOLA PÁGINA*/
  console.log(props);
  if (props.full) {
    let mostrarPasos = props.pasos.map((paso) => {
      return (
        <div className="pasos">
          <p className="rosa bold mright10">{paso.orden}</p>
          <p>{paso.paso}</p>
        </div>
      );
    });

    let ingredientes = props.ingredientes.map((ingrediente) => {
      return (
        <>
          <p className="mright20">{ingrediente.ingrediente}</p>
        </>
      );
    });

    let mostrarIngredientes = props.ingredientes.map((ingrediente) => {
      return (
        <div className="pasos">
          <p className="bold mright10">{ingrediente.ingrediente}:</p>
          <p>{ingrediente.cantidad}</p>
        </div>
      );
    });

    return (
      <>
        {/* link para volver al listado de recetas según categoria */}
        <div className="top volver ">
          <Link className="sinLinea negro" to={"/recetas/" + props.categoria}>
            <p className="negroLink">
              <FontAwesomeIcon
                className="rosa marginRignt"
                icon={faChevronCircleLeft}
              />
              Volver al listado de recetas
            </p>
          </Link>
        </div>

        {/* Comienzo de la receta */}
        <div className="receta" key={props.nombre}>
          <img src={props.img} alt={props.nombre} />
          <h2 className="rosa playfair mtop10">{props.nombre}</h2>

          {/* linea con iconos y pequeña info extra */}
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

          {/* ingredientes y pasos separados en pestañas */}
          <Tabs
            defaultActiveKey="login"
            transition={false}
            id="noanim-tab-example"
            className="mb-3 "
          >
            {/* ingredientes*/}
            <Tab
              className="widthLinea tabReceta"
              eventKey="login"
              title="Ingredientes"
            >
              <div className="ingredientes ">{ingredientes}</div>
              <div>{mostrarIngredientes}</div>
            </Tab>

            {/* pasos */}
            <Tab className=" tabReceta" eventKey="Register" title="Pasos">
              <div>{mostrarPasos}</div>
            </Tab>
          </Tabs>
        </div>
      </>
    );
  } else {
    /* LISTADO con imagen y nombre de receta en cards */
    return (
      <div className="cardReceta borde " key={props.index}>
        <Link
          className="sinLinea negro"
          to={
            "/recetas/" +
            props.categoria +
            "/" +
            props.nombre /* .replace(/ |[áéíóú]/g, "-") */
          }
        >
          <img src={props.img} alt={props.nombre} />
          <h1 className="menor playfair mtop10">{props.nombre}</h1>
          <div className="flex negro">
            <p className="mRight25">
              <FontAwesomeIcon className="negro" icon={faClock} />{" "}
              {props.tiempo} minutos
            </p>
            <p className="mRight25">
              <FontAwesomeIcon className="negro" icon={faSignal} />{" "}
              {props.dificultad} dificultad
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Recetas;
