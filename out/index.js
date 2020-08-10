"use strict";
exports.__esModule = true;
var finder_1 = require("./services/finder");
var data_provider_1 = require("./repositories/data-provider");
var app_1 = require("./app");
function startUp() {
    var finder = new finder_1["default"](data_provider_1["default"]);
    app_1["default"](finder);
}
startUp();
//# sourceMappingURL=index.js.map