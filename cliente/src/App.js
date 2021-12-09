import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

//Components Import
import Cabecera from "./Components/Cabecera";
import Home from "./Components/Home";
import Recetario from "./Components/Recetario";
import Recetas from "./Components/Recetas";
import Micuenta from "./Components/Micuenta";
import Footer from "./Components/Footer";

function App() {
  //Estado - datos de la bbdd - recetas filtrados según su categoria
  const [recetas, setRecetas] = useState([]);
  const [categoria1, setCategoria1] = useState([]);
  const [categoria2, setCategoria2] = useState([]);
  const [categoria3, setCategoria3] = useState([]);
  const [categoria4, setCategoria4] = useState([]);
  const [categoria5, setCategoria5] = useState([]);
  const [categoria6, setCategoria6] = useState([]);
  const [categoria7, setCategoria7] = useState([]);
  const [categoria8, setCategoria8] = useState([]);

  //Fetch para la Info de la bbdd - recetas (general y por categorias)

  useEffect(() => {
    fetch("http://localhost:3001/recetas/listado")
      .then((res) => res.json())
      .then((data) => {
        setRecetas(data.results);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/recetas/5ingredientes")
      .then((res) => res.json())
      .then((data) => {
        setCategoria1(data.results);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/recetas/20minutos")
      .then((res) => res.json())
      .then((data) => {
        setCategoria2(data.results);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/recetas/postres")
      .then((res) => res.json())
      .then((data) => {
        setCategoria3(data.results);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/recetas/vegetariano")
      .then((res) => res.json())
      .then((data) => {
        setCategoria4(data.results);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/recetas/singluten")
      .then((res) => res.json())
      .then((data) => {
        setCategoria5(data.results);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/recetas/asiatico")
      .then((res) => res.json())
      .then((data) => {
        setCategoria6(data.results);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/recetas/mexicano")
      .then((res) => res.json())
      .then((data) => {
        setCategoria7(data.results);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/recetas/italiano")
      .then((res) => res.json())
      .then((data) => {
        setCategoria8(data.results);
      });
  }, []);

  const rutas = recetas.map((receta, index) => {
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
  });

  return (
    <>
      <BrowserRouter>
        <Cabecera />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recetas/5ingredientes"
            element={<Recetario data={categoria1} />}
          />
          <Route
            path="/recetas/20minutos"
            element={<Recetario data={categoria2} />}
          />
          <Route
            path="recetas/postres"
            element={<Recetario titulo={"postres"} data={categoria3} />}
          />
          <Route
            path="/recetas/vegetariano"
            element={<Recetario data={categoria4} />}
          />
          <Route
            path="/recetas/asiatico"
            element={<Recetario data={categoria6} />}
          />
          <Route
            path="/recetas/mexicano"
            element={<Recetario data={categoria7} />}
          />
          <Route
            path="/recetas/italiano"
            element={<Recetario data={categoria8} />}
          />
          <Route
            path="/recetas/singluten"
            element={<Recetario data={categoria5} />}
          />
          <Route path="/cuenta" element={<Micuenta />} />
          {rutas}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
