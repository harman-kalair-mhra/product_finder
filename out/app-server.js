"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var finder_1 = __importDefault(require("./services/finder"));
var data_provider_1 = __importDefault(require("./repositories/data-provider"));
var app = express_1["default"]();
var port = 4000;
app.use(express_1["default"].urlencoded({
    extended: true
}));
var productFinder = new finder_1["default"](data_provider_1["default"]);
app.use(express_1["default"].static("public"));
var Main = function (request, response) {
    response.render("index");
};
app.post("/search", function (request, response) {
    var searchedProduct = productFinder.getProduct(request.body.products);
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
    response.send(request.params.word);
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=app-server.js.map