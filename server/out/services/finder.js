"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var models_1 = __importDefault(require("../models"));
var ProductFinder = /** @class */ (function () {
    function ProductFinder(dataSource) {
        var _this = this;
        this.dataSource = dataSource;
        models_1["default"].Product.find({}, function (err, productItems) {
            console.log(productItems);
            _this.itemNames = productItems;
        });
    }
    ProductFinder.prototype.getProduct = function (Product) {
        var productObjects = this.dataSource();
        return productObjects[Product];
    };
    return ProductFinder;
}());
exports["default"] = ProductFinder;
//# sourceMappingURL=finder.js.map