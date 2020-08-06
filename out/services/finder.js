"use strict";
//exports.getProduct = getProduct; //- when using this surround this with curley brackets during import {}
//module.exports = getProduct; - exporting a single function
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