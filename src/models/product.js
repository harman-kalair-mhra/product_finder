class Product {
  constructor(plNumber, name, dose, substance, url) {
    this.plNumber = plNumber;
    this.name = name;
    this.dose = dose;
    this.substance = substance;
    this.url = url;
  }

  describe() {
    console.log(this.plNumber + " " + this.name);
  }
}

module.exports = Product;
