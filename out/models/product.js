"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product(plNumber, name, dose, substance, url) {
        this.plNumber = plNumber;
        this.name = name;
        this.dose = dose;
        this.substance = substance;
        this.url = url;
    }
    Product.prototype.toString = function () {
        return "\nPL Number: " + this.plNumber + "\nName: " + this.name + "\nDose: " + this.dose + "\nSubstance: " + this.substance + "\nURL: " + this.url + "\n";
    };
    return Product;
}());
exports["default"] = Product;
//# sourceMappingURL=product.js.map