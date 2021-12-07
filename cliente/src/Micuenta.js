import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import { useState } from "react";

function Micuenta() {
  //ESTADOS
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [nombreNuevo, setNombreNuevo] = useState("");
  const [emailNuevo, setEmailNuevo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contraseña2, setContraseña2] = useState("");

  /*   //REGISTRARSE
  function registro() {
    let nuevoCliente = {
      nombre: document.getElementById("nombre").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    if (
      //las contraseñas coinciden
      document.getElementById("password").value ===
      document.getElementById("secondpassword").value
    ) {
      fetch("/cuenta/registro", {
        method: "POST",
        body: JSON.stringify(nuevoCliente),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.altaOK == true) {
            document.getElementById("clientesRegistro").innerHTML = " ";
            document.getElementById("clientesRegistro").style.display = "none";
          } else {
            document.getElementById("errorContraseña").innerHTML = data.mensaje;
          }
        });
    } else {
      //las contraseñas no coinciden

      document.getElementById(
        "errorContraseña"
      ).innerHTML = `<p class="falloRegistro">Las contraseñas no coinciden</p>`;
    }
  } */

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
              type="text"
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button id="botonLogin" className="botonLogin" onclick="">
              Iniciar sesión
            </button>
          </form>
        </Tab>
        <Tab eventKey="Register" title="Registrarse">
          <form className="formularioLogin">
            <input
              type="text"
              placeholder="Nombre"
              onChange={(e) => setNombreNuevo(e.target.value)}
              value={nombreNuevo}
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
              onChange={(e) => setContraseña(e.target.value)}
              value={contraseña}
            />

            <input
              type="password"
              placeholder="Repite la contraseña"
              onChange={(e) => setContraseña2(e.target.value)}
              value={contraseña2}
            />

            <button
              id="botonRegistrar"
              className="botonLogin"
              onclick="registro()"
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
