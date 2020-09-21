"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.connectDb = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var product_1 = __importDefault(require("./product"));
var order_1 = __importDefault(require("./order"));
var connectDb = function () {
    return mongoose_1["default"].connect("mongodb://localhost:27017/products");
};
exports.connectDb = connectDb;
var models = { Product: product_1["default"], Order: order_1["default"] };
exports["default"] = models;
//# sourceMappingURL=index.js.map