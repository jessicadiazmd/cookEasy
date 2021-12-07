const express = require("express"); //llamamos a express
const app = express(); // guardamos express en cont app
const bcrypt = require("bcrypt"); //lamamos a bcrypt

const mongodb = require("mongodb"); //llamamos a mongo
const MongoClient = mongodb.MongoClient;

//Control de errores de Mongo
MongoClient.connect(
  "mongodb+srv://jessica:jessicaMongo@cluster0.zy09y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  (err, client) => {
    err
      ? (console.log("🔴 MongoDB no conectado"), console.log(`error: ${err}`))
      : ((app.locals.db = client.db("CookLover")),
        console.log("🟢 MongoDB está conectado"));
  }
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

let recetas = require("./recetas");
app.use("/recetas", recetas);

let cuenta = require("./cuenta");
app.use("/cuenta", cuenta);

app.listen(process.env.PORT || 3001);
