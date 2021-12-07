const express = require("express");
const router = express.Router();

//Ruta / ofrece un listado de recetas
router.get("/5_ingredientes", (req, res) => {
  req.app.locals.db
    .collection("Recetas")
    .find({ categoria: "5ingredientes" })
    .toArray((err, data) => {
      err
        ? (console.log(err),
          res.send({ mensaje: "No se ha podido acceder a la base de datos" }))
        : (console.log(data), res.send({ results: data }));
    });
});

module.exports = router;
