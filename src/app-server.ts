const express = require("express");
import ProductFinder from "./services/finder";
import getData from "./repositories/data-provider";

const app = express();
const port = 4000;

let productFinder = new ProductFinder(getData);

app.use(express.static("public"));

const Main = (request, response) => {
  response.render("index", {
    title: "Testing Pug",
    message: "Coverts to html",
  });
};

app.get("/search/:products", (request, response) => {
  let searchedProduct = productFinder.getProduct(request.params.products);

  if (searchedProduct) {
    response.send(searchedProduct);
  } else {
    response.send("Product Not Found");
  }
});

app.get("/", Main);

app.set("view engine", "pug");
app.set("views", "./out/views");

app.get("/mirror/:word", (request, response) => {
  response.send(request.parms.word);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
