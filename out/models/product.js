var Product = /** @class */ (function () {
    function Product(plNumber, name, dose, substance, url) {
        this.plNumber = plNumber;
        this.name = name;
        this.dose = dose;
        this.substance = substance;
        this.url = url;
        this.sensitive_data = "Password/";
    }
    Product.prototype.toString = function () {
        return "\nPL Number: " + this.plNumber + "\nName: " + this.name + "\nDose: " + this.dose + "\nSubstance: " + this.substance + "\nURL: " + this.url + "\n";
    };
    return Product;
}());
module.exports = Product;
//# sourceMappingURL=product.js.map