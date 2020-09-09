//exports.getProduct = getProduct; //- when using this surround this with curley brackets during import {}
//module.exports = getProduct; - exporting a single function
import Product, { IProduct } from "../models/product";
import models from "../models";
export default class ProductFinder {
  dataSource: () => typeof Product;
  itemNames: IProduct[];
  constructor(dataSource) {
    this.dataSource = dataSource;
    models.Product.find({}, (err, productItems) => {
      console.log(productItems);
      this.itemNames = productItems;
    });
  }

  getProduct(Product) {
    let productObjects = this.dataSource();
    return productObjects[Product];
  }
}
