import Product from "../models/product";
export default function getData() {
  let itemNames = [
    "PL001730050",
    "PL001655013",
    "PL136060206",
    "PL252980158",
    "PL201170079",
  ];
  const product1 = new Product({
    plNumber: "PL001730050",
    name: "Ibugel gel",
    dose: "10mg",
    substance: "Ibuprofen",
    url:
      "https://mhraproductsproduction.blob.core.windows.net/docs/54454db7a69e9153ab7302232cdb8ee9230579ca",
  });
  product1.save();
  const product2 = new Product({
    plNumber: "PL001655013",
    name: "Anadin Extra",
    dose: "5mg",
    substance: "Paracetamol",
    url:
      "https://mhraproductsproduction.blob.core.windows.net/docs/10c02830183326751553be62be5e2564fb47e970",
  });
  product2.save();
  const product3 = new Product({
    plNumber: "PL136060206",
    name: "Tadalafil 10mg film-coated tablets",
    dose: "10mg",
    substance: "Tadafil",
    url:
      "https://mhraproductsproduction.blob.core.windows.net/docs/a1744b861fbda647f286cc70865d30cf2673c077",
  });
  product3.save();
  const product4 = new Product({
    plNumber: "PL252980158",
    name: "Nabilone 1mg capsules",
    dose: "1mg",
    substance: "Nabilone",
    url:
      "https://mhraproductsproduction.blob.core.windows.net/docs/b68e1e028e44806a00a65d016aec4f1c90436ac4",
  });
  product4.save();
  const product5 = new Product({
    plNumber: "PL201170079",
    name: "Ramipril 2.5mg tablets ",
    dose: "2.5mg",
    substance: "Ramipril",
    url:
      "https://mhraproductsproduction.blob.core.windows.net/docs/bdc8d29cd2957f0ffdd230f6f47a5d9cf5b3f039",
  });
  product5.save();

  const products = [];

  let productObjects = {};
  for (let i = 0; i < products.length; i++) {
    let Product = products[i];
    productObjects[Product.plNumber.toUpperCase()] = Product; // key and value, key being the Pl number and value = product1 etc.
  }
  return productObjects;
}
