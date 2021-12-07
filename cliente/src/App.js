import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

//Components Import
import Cabecera from "./Cabecera";
import Home from "./Home";
import Recetario from "./Recetario";
import Recetas from "./Recetas";
import Micuenta from "./Micuenta";
import Footer from "./Footer";

function App() {
  //Estado - datos de la bbdd - recetas
  const [data, setData] = useState([]);

  //Info de la bbdd - recetas
  useEffect(() => {
    fetch("http://localhost:3001/recetas/5_ingredientes")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  const rutas = data.map((receta, index) => {
    return (
      <Route
        path={"/" + receta.nombre.replace(/ |[áéíóú]/g, "-")}
        element={
          <Recetas
            key={index}
            full={true}
            img={receta.imagen}
            nombre={receta.nombre}
            dificultad={receta.dificultad}
            tiempo={receta.tiempo}
            kcal={receta.kcal}
            pasos={receta.pasos}
            ingredientes={receta.ingredientes}
          />
        }
      />
    );
  });

  return (
    <>
      <BrowserRouter>
        <Cabecera />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recetas/5_ingredientes"
            element={<Recetario data={data} />}
          />
          <Route path="/20_minutos" element={<Recetario data={data} />} />
          <Route path="/postres" element={<Recetario data={data} />} />
          <Route path="/vegetariano" element={<Recetario data={data} />} />
          <Route path="/alto_proteinas" element={<Recetario data={data} />} />
          <Route path="/mexicano" element={<Recetario data={data} />} />
          <Route path="/italiano" element={<Recetario data={data} />} />
          <Route path="/bajo_calorias" element={<Recetario data={data} />} />
          <Route path="/cuenta" element={<Micuenta />} />
          {rutas}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
