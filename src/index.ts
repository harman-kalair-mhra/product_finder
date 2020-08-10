import ProductFinder from "./services/finder";
import getData from "./repositories/data-provider";
import getInput from "./app";

function startUp() {
  let finder = new ProductFinder(getData);
  getInput(finder);
}
startUp();
