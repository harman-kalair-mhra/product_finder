import Product from "../models/product";
export default function getData() {
  let itemNames = [
    "PL001730050",
    "PL001655013",
    "PL136060206",
    "PL252980158",
    "PL201170079",
  ];
  const product1 = new Product(
    "PL001730050",
    "Ibugel gel",
    "10mg",
    "Ibuprofen",
    "https://mhraproductsproduction.blob.core.windows.net/docs/54454db7a69e9153ab7302232cdb8ee9230579ca"
  );
  const product2 = new Product(
    "PL001655013",
    "Anadin Extra",
    "5mg",
    "Paracetamol",
    "https://mhraproductsproduction.blob.core.windows.net/docs/10c02830183326751553be62be5e2564fb47e970"
  );
  const product3 = new Product(
    "PL136060206",
    "Tadalafil 10mg film-coated tablets",
    "10mg",
    "Tadafil",
    "https://mhraproductsproduction.blob.core.windows.net/docs/a1744b861fbda647f286cc70865d30cf2673c077"
  );
  const product4 = new Product(
    "PL252980158",
    "Nabilone 1mg capsules",
    "1mg",
    "Nabilone",
    "https://mhraproductsproduction.blob.core.windows.net/docs/b68e1e028e44806a00a65d016aec4f1c90436ac4"
  );
  const product5 = new Product(
    "PL201170079",
    "Ramipril 2.5mg tablets ",
    "2.5mg",
    "Ramipril",
    "https://mhraproductsproduction.blob.core.windows.net/docs/bdc8d29cd2957f0ffdd230f6f47a5d9cf5b3f039"
  );
  const products = [product1, product2, product3, product4, product5];

  let productObjects = {};
  for (let i = 0; i < products.length; i++) {
    let Product = products[i];
    productObjects[Product.plNumber.toUpperCase()] = Product; // key and value, key being the Pl number and value = product1 etc.
  }
  return productObjects;
}
