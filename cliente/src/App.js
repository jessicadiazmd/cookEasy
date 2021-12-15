import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState /* useEffect  */ } from "react";

//Components Import
import Cabecera from "./Components/Cabecera";
import Home from "./Components/Home";
import Recetario from "./Components/Recetario";
import RecetarioB from "./Components/RecetarioB";
import Micuenta from "./Components/Micuenta";
import Footer from "./Components/Footer";

function App() {
  //Estados
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);
  //const [mensaje, setMensaje] = useState(null);

  /* const rutas = recetas.map((receta, index) => {
    return (
      <Route
        path={"/" + receta.nombre.replace(/ |[áéíóú]/g, "-")}
        element={
          <Recetas
            key={index}
            full={true}
            img={receta.img}
            nombre={receta.nombre}
            dificultad={receta.dificultad}
            tiempo={receta.tiempo}
            kcal={receta.kcal}
            pasos={receta.pasos}
            ingredientes={receta.ingredientes}
            categoria={receta.categoria}
          />
        }
      />
    );
  }); */

  return (
    <>
      <BrowserRouter>
        <Cabecera />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recetas/:categoria"
            element={<Recetario /* data={categoria} */ />}
          />
          <Route
            path="/recetas/:categoria/:nombre"
            element={<RecetarioB /* data={categoria} */ />}
          />

          <Route
            path="/cuenta"
            element={
              <Micuenta
                user={user}
                setUser={setUser}
                logged={logged}
                setLogged={setLogged}
                // setMensaje={setMensaje}
              />
            }
          />
          {/* {rutas} */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
