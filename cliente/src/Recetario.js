import Recetas from "./Recetas";

function Recetario(props) {
  return (
    <>
      <h1 className="top">Recetas</h1>
      <div className="cardRecetario">
        {props.data.map((receta, index) => {
          return (
            <Recetas
              key={index}
              full={false}
              img={receta.imagen}
              nombre={receta.nombre}
              dificultad={receta.dificultad}
              tiempo={receta.tiempo}
              kcal={receta.kcal}
              pasos={receta.pasos}
              ingredientes={receta.ingredientes}
            />
          );
        })}
      </div>
    </>
  );
}

export default Recetario;
