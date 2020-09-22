import express, { Request, Response, request } from "express";
import bodyParser from "body-parser";
import ProductFinder from "./services/finder";
import getData from "./repositories/data-provider";
import orderService from "./services/order-service";

import models, { connectDb } from "./models";
import OrderService from "./services/order-service";

const app = express();
const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

let productFinder;

app.use(express.static("public"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const main = (request, response) => {
  response.setHeader("Content-Type", "application/json");
  response.send(productFinder.itemNames);
};

app.post("/order", (request, response) => {
  const order = new OrderService();
  order
    .createOrder(
      request.body.customerId,
      request.body.name,
      request.body.plNumber,
      request.body.dose,
      request.body.substance
    )
    .then(() => response.sendStatus(201));
});

app.get("/hello", (request: Request, response: Response) => {
  response.setHeader("Content-Type", "application/json");
  response.send({ "Hello there": "This is test" });
});

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

app.get("/products", main);

app.set("view engine", "pug");
app.set("views", "./out/views");

app.get("/mirror/:word", (request, response) => {
  response.send(request.params.word);
});

connectDb().then(async () => {
  // createItems();

  productFinder = new ProductFinder(getData());

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});

// const createItems = async () => {
//   const item1 = new models.Item({
//     plNumber: "PL123456",
//   });

//   await item1.save();
// };
