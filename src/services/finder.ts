//exports.getProduct = getProduct; //- when using this surround this with curley brackets during import {}
//module.exports = getProduct; - exporting a single function
import Product from "../models/product";
export default class ProductFinder {
  dataSource: () => Product;

  constructor(dataSource) {
    this.dataSource = dataSource;
  }

  getProduct(Product) {
    let productObjects = this.dataSource();
    return productObjects[Product];
  }
}
