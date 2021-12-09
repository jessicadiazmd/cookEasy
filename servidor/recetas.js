const express = require("express");
const router = express.Router();

//Ruta /recetas/listado ofrece un listado de TODAS las recetas
router.get("/listado", (req, res) => {
  req.app.locals.db
    .collection("Recetas")
    .find()
    .toArray((err, data) => {
      err
        ? (console.log(err),
          res.send({ mensaje: "No se ha podido acceder a la base de datos" }))
        : (console.log(data), res.send({ results: data }));
    });
});

//Ruta /recetas/5_ingredientes ofrece un listado de recetas de esa categoria
router.get("/5ingredientes", (req, res) => {
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

//Ruta /recetas/20_minutos ofrece un listado de recetas de esa categoria
router.get("/20minutos", (req, res) => {
  req.app.locals.db
    .collection("Recetas")
    .find({ categoria: "20minutos" })
    .toArray((err, data) => {
      err
        ? (console.log(err),
          res.send({ mensaje: "No se ha podido acceder a la base de datos" }))
        : (console.log(data), res.send({ results: data }));
    });
});

//Ruta /recetas/postres ofrece un listado de recetas de esa categoria
router.get("/postres", (req, res) => {
  req.app.locals.db
    .collection("Recetas")
    .find({ categoria: "postre" })
    .toArray((err, data) => {
      err
        ? (console.log(err),
          res.send({ mensaje: "No se ha podido acceder a la base de datos" }))
        : (console.log(data), res.send({ results: data }));
    });
});

//Ruta /recetas/vegetariano ofrece un listado de recetas de esa categoria
router.get("/vegetariano", (req, res) => {
  req.app.locals.db
    .collection("Recetas")
    .find({ categoria: "vegetariano" })
    .toArray((err, data) => {
      err
        ? (console.log(err),
          res.send({ mensaje: "No se ha podido acceder a la base de datos" }))
        : (console.log(data), res.send({ results: data }));
    });
});

//Ruta /recetas/singluten ofrece un listado de recetas de esa categoria
router.get("/singluten", (req, res) => {
  req.app.locals.db
    .collection("Recetas")
    .find({ categoria: "singluten" })
    .toArray((err, data) => {
      err
        ? (console.log(err),
          res.send({ mensaje: "No se ha podido acceder a la base de datos" }))
        : (console.log(data), res.send({ results: data }));
    });
});

//Ruta /recetas/asiatico ofrece un listado de recetas de esa categoria
router.get("/asiatico", (req, res) => {
  req.app.locals.db
    .collection("Recetas")
    .find({ categoria: "asiatico" })
    .toArray((err, data) => {
      err
        ? (console.log(err),
          res.send({ mensaje: "No se ha podido acceder a la base de datos" }))
        : (console.log(data), res.send({ results: data }));
    });
});

//Ruta /recetas/mexicano ofrece un listado de recetas de esa categoria
router.get("/mexicano", (req, res) => {
  req.app.locals.db
    .collection("Recetas")
    .find({ categoria: "mexicano" })
    .toArray((err, data) => {
      err
        ? (console.log(err),
          res.send({ mensaje: "No se ha podido acceder a la base de datos" }))
        : (console.log(data), res.send({ results: data }));
    });
});

//Ruta /recetas/italiano ofrece un listado de recetas de esa categoria
router.get("/italiano", (req, res) => {
  req.app.locals.db
    .collection("Recetas")
    .find({ categoria: "italiano" })
    .toArray((err, data) => {
      err
        ? (console.log(err),
          res.send({ mensaje: "No se ha podido acceder a la base de datos" }))
        : (console.log(data), res.send({ results: data }));
    });
});

module.exports = router;
