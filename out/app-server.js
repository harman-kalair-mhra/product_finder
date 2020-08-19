"use strict";
exports.__esModule = true;
var express = require("express");
var finder_1 = require("./services/finder");
var data_provider_1 = require("./repositories/data-provider");
var app = express();
var port = 4000;
var productFinder = new finder_1["default"](data_provider_1["default"]);
app.use(express.static("public"));
var Main = function (request, response) {
    response.render("index", {
        title: "Testing Pug",
        message: "Coverts to html"
    });
};
app.get("/search/:products", function (request, response) {
    var searchedProduct = productFinder.getProduct(request.params.products);
    if (searchedProduct) {
        response.send(searchedProduct);
    }
    else {
        response.send("Product Not Found");
    }
});
app.get("/", Main);
app.set("view engine", "pug");
app.set("views", "./out/views");
app.get("/mirror/:word", function (request, response) {
    response.send(request.parms.word);
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=app-server.js.map