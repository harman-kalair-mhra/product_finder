"use strict";
exports.__esModule = true;
var ProductFinder = /** @class */ (function () {
    function ProductFinder(dataSource) {
        this.dataSource = dataSource;
    }
    ProductFinder.prototype.getProduct = function (Product) {
        var productObjects = this.dataSource();
        return productObjects[Product];
    };
    return ProductFinder;
}());
exports["default"] = ProductFinder;
//# sourceMappingURL=finder.js.map