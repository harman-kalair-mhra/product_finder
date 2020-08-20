"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var finder_1 = __importDefault(require("./services/finder"));
var data_provider_1 = __importDefault(require("./repositories/data-provider"));
var app_1 = __importDefault(require("./app"));
function startUp() {
    var finder = new finder_1["default"](data_provider_1["default"]);
    app_1["default"](finder);
}
startUp();
//# sourceMappingURL=index.js.map