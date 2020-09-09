"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var itemSchema = new mongoose_1["default"].Schema({
    plNumber: {
        type: String,
        unique: false,
        required: true
    }
}, { timestamps: true });
var Item = mongoose_1["default"].model("Items", itemSchema);
exports["default"] = Item;
//# sourceMappingURL=item.js.map