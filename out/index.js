var ProductFinder = require("./services/finder.js");
var getData = require("./repositories/data-provider");
var getInput = require("./app.js");
function startUp() {
    var finder = new ProductFinder(getData);
    getInput(finder);
}
startUp();
//# sourceMappingURL=index.js.map