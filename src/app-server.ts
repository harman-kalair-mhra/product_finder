import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import ProductFinder from "./services/finder";
import getData from "./repositories/data-provider";

const app = express();
const port = 5000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

let productFinder = new ProductFinder(getData);

app.use(express.static("public"));

const Main = (request, response) => {
  response.render("index");
};

app.post("/search", (request: Request, response: Response) => {
  let searchedProduct = productFinder.getProduct(
    request.body.products.toUpperCase()
  );
  if (searchedProduct) {
    response.render("description", {
      title: "Product Description",
      item: searchedProduct,
    });
  } else {
    response.send("Product Not Found");
  }
});

app.get("/", Main);

app.set("view engine", "pug");
app.set("views", "./out/views");

app.get("/mirror/:word", (request, response) => {
  response.send(request.params.word);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
