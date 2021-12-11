//Components Import
import Presentacion from "./Presentacion";
import Buscador from "./Buscador";
import Categorias from "./Categorias";
import Instagram from "./Instagram";

function Home() {
  return (
    <body className="fondoVerde">
      <Buscador />
      <Presentacion />
      <Categorias />
      <Instagram />
    </body>
  );
}

export default Home;
