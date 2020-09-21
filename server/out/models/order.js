"use strict";
//Mongoose
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var orderSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    customerId: {
        type: String,
        unique: false,
        required: true
    },
    orderId: {
        type: String,
        unique: true,
        required: true
    }
}, { timestamps: true });
var Order = mongoose_1["default"].model("Order", orderSchema);
exports["default"] = Order;
//# sourceMappingURL=order.js.map