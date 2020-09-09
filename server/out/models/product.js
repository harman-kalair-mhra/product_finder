"use strict";
//Mongoose
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var productSchema = new mongoose_1["default"].Schema({
    plNumber: {
        type: String,
        unique: false,
        required: true
    },
    name: {
        type: String,
        unique: false,
        required: true
    },
    dose: {
        type: String,
        unique: false,
        required: true
    },
    substance: {
        type: String,
        unique: false,
        required: true
    },
    url: {
        type: String,
        unique: false,
        required: true
    }
}, { timestamps: true });
var Product = mongoose_1["default"].model("productItems", productSchema);
exports["default"] = Product;
//# sourceMappingURL=product.js.map