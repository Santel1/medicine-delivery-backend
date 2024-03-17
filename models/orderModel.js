const { model, Schema } = require("mongoose");

const orderSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please set name"],
  },
  phone: {
    type: Number,
    required: [true, "Please set phone"],
  },
  email: {
    type: String,
    required: [true, "Please set email"],
  },
  address: {
    type: String,
    required: [true, "Please set address"],
  },
  totalPrice: {
    type: Number,
  },
  drugs: {
    type: Array,
  },
});

const Order = model("Order", orderSchema);

module.exports = Order;
