import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import { useState } from "react";

function Usuario() {
  const [contraseña, setContraseña] = useState("");
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  /*  function modificar() {} */

  return (
    <div className=" top areaUsuario fondoVerde">
      <Tabs
        defaultActiveKey="datos"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="datos" title="Mis datos" className="tabArea">
          <div className="flex">
            <p className="rosa bold mright10">Nombre: </p> <p>Lorem ipsum</p>
          </div>
          <div className="flex">
            <p className="rosa bold mright10">Email: </p> <p>Lorem ipsum</p>
          </div>

          <h4 className="rosa bold modificarDatos ">Modificar mis datos</h4>
          <div className="flex">
            <input
              className="inputModificar mright20"
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <button className="botonmodificar">Modificar</button>
          </div>
          <div className="flex">
            <input
              className="inputModificar mright20"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="botonmodificar">Modificar</button>
          </div>
          <div className="flex">
            <input
              className="inputModificar mright20"
              type="password"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
            <button className="botonmodificar">Modificar</button>
          </div>

          {/* <button className="botonLogin" onClick={modificar}>
            Modificar datos
          </button> */}
        </Tab>
        <Tab eventKey="recetasFavs" title="Recetas favoritas"></Tab>
        <Tab eventKey="misRecetas" title="Mis recetas"></Tab>
      </Tabs>
    </div>
  );
}

export default Usuario;
