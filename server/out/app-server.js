"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var finder_1 = __importDefault(require("./services/finder"));
var data_provider_1 = __importDefault(require("./repositories/data-provider"));
var models_1 = require("./models");
var order_service_1 = __importDefault(require("./services/order-service"));
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].urlencoded({
    extended: true
}));
var productFinder;
app.use(express_1["default"].static("public"));
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({ extended: true }));
var main = function (request, response) {
    response.setHeader("Content-Type", "application/json");
    response.send(productFinder.itemNames);
};
app.post("/order", function (request, response) {
    var order = new order_service_1["default"]();
    order
        .createOrder(request.body.customerId, request.body.name)
        .then(function () { return response.sendStatus(201); });
});
app.get("/hello", function (request, response) {
    response.setHeader("Content-Type", "application/json");
    response.send({ "Hello there": "This is test" });
});
app.post("/search", function (request, response) {
    var searchedProduct = productFinder.getProduct(request.body.products.toUpperCase());
    if (searchedProduct) {
        response.render("description", {
            title: "Product Description",
            item: searchedProduct
        });
    }
    else {
        response.send("Product Not Found");
    }
});
app.get("/products", main);
app.set("view engine", "pug");
app.set("views", "./out/views");
app.get("/mirror/:word", function (request, response) {
    response.send(request.params.word);
});
models_1.connectDb().then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // createItems();
        productFinder = new finder_1["default"](data_provider_1["default"]());
        app.listen(port, function () {
            console.log("Example app listening at http://localhost:" + port);
        });
        return [2 /*return*/];
    });
}); });
// const createItems = async () => {
//   const item1 = new models.Item({
//     plNumber: "PL123456",
//   });
//   await item1.save();
// };
//# sourceMappingURL=app-server.js.map