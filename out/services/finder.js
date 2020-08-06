//exports.getProduct = getProduct; //- when using this surround this with curley brackets during import {}
//module.exports = getProduct; - exporting a single function
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
module.exports = ProductFinder;
//# sourceMappingURL=finder.js.map