import Recetas from "./Recetas";

function Recetario(props) {
  return (
    <>
      {/* <h1 className="top playfair">Recetas</h1> */}
      <div className="cardRecetario top">
        {props.data.map((receta, index) => {
          return (
            <Recetas
              key={index}
              full={false}
              img={receta.img}
              nombre={receta.nombre}
              dificultad={receta.dificultad}
              tiempo={receta.tiempo}
              kcal={receta.kcal}
              pasos={receta.pasos}
              ingredientes={receta.ingredientes}
              categoria={receta.categoria}
            />
          );
        })}
      </div>
    </>
  );
}

export default Recetario;
