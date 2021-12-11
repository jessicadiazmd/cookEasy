import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import { useState } from "react";
import Axios from "axios";

function Micuenta() {
  //ESTADOS
  const [contraseña, setContraseña] = useState("");
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [emailNuevo, setEmailNuevo] = useState("");
  const [contraseñaNueva, setContraseñaNueva] = useState("");
  const [contraseñaNueva2, setContraseñaNueva2] = useState("");

  function registrar() {
    Axios({
      method: "POST",
      data: {
        nombre: nombre,
        email: emailNuevo,
        password: contraseñaNueva,
      },
      withCredentials: true,
      url: "http://localhost:3001//signup",
    }).then((res) => {
      console.log(res.data);
      /* if (res.data.logged) {
        setLogged(res.data.logged);
        setUser(res.data.user);
        setVariante("success");
        setMensaje(res.data.mensaje);
      } else {
        setLogged(res.data.logged);
        setUser(null);
        setVariante("danger");
        setMensaje(res.data.mensaje);
      } */
    });
  }

  return (
    <div className=" top miCuenta fondoVerde">
      <Tabs
        defaultActiveKey="login"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="login" title="Iniciar sesión">
          <form className="formularioLogin">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setContraseña(e.target.value)}
              value={contraseña}
            />
            <button id="botonLogin" className="botonLogin">
              Iniciar sesión
            </button>
          </form>
        </Tab>
        <Tab eventKey="Register" title="Registrarse">
          <form className="formularioLogin">
            <input
              type="text"
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmailNuevo(e.target.value)}
              value={emailNuevo}
            />
            <input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setContraseñaNueva(e.target.value)}
              value={contraseñaNueva}
            />

            <input
              type="password"
              placeholder="Repite la contraseña"
              onChange={(e) => setContraseñaNueva2(e.target.value)}
              value={contraseñaNueva2}
            />

            <button
              id="botonRegistrar"
              className="botonLogin"
              onClick={() => registrar()}
            >
              Registrarme
            </button>
          </form>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Micuenta;
