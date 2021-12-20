import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import { useState } from "react";
import Axios from "axios";

function Micuenta({
  user,
  setUser,
  logged,
  setLogged,
  setVariante,
  setMensaje,
}) {
  //ESTADOS
  const [contraseña, setContraseña] = useState("");
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [emailRegistro, setEmailRegistro] = useState("");
  const [contraseñaRegistro, setContraseñaRegistro] = useState("");
  const [contraseñaRegistro2, setContraseñaRegistro2] = useState("");

  function registrar() {
    Axios({
      method: "POST",
      data: {
        nombre: nombre,
        email: emailRegistro,
        password: contraseñaRegistro,
      },
      withCredentials: true,
      url: "http://localhost:3001/signup",
    }).then((res) => {
      console.log("eco");
      console.log(res.data);
    });
  }

  function login() {
    Axios({
      method: "POST",
      data: {
        email: email,
        password: contraseña,
      },
      withCredentials: true,
      url: "http://localhost:3001/login",
    }).then((res) => {
      console.log(res.data);
      if (res.data.logged) {
        setLogged(res.data.logged);
        setUser(res.data.user);
        setVariante("success");
        setMensaje(res.data.mensaje);
      } else {
        setLogged(res.data.logged);
        setUser(null);
        setVariante("danger");
        setMensaje(res.data.mensaje);
      }
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
            <button id="botonLogin" className="botonLogin" onClick={login}>
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
              onChange={(e) => setEmailRegistro(e.target.value)}
              value={emailRegistro}
            />
            <input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setContraseñaRegistro(e.target.value)}
              value={contraseñaRegistro}
            />

            <input
              type="password"
              placeholder="Repite la contraseña"
              onChange={(e) => setContraseñaRegistro2(e.target.value)}
              value={contraseñaRegistro2}
            />

            <button
              id="botonRegistrar"
              className="botonLogin"
              onClick={registrar}
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
