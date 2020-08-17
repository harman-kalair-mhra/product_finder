const express = require("express");
import ProductFinder from "./services/finder";

const app = express();
const port = 4000;

let productFinder = new ProductFinder();

import Product from "./models/product";

app.use(express.static("public"));

const Main = (request, response) => {
  response.render("index", {
    title: "Testing Pug",
    message: "Coverts to html",
  });
};

app.get("/search/:product", (request, response) => {
  response.send(productFinder.findProduct(request.params.product));
});

app.get("/", Main);

app.set("view engine", "pug");

app.get("/mirror/:word", (request, response) => {
  response.send(request.parms.word);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
