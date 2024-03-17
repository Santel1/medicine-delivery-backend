const { model, Schema } = require("mongoose");

const drugSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for drug"],
  },
  price: {
    type: Number,
    required: [true, "Set price for drug"],
  },
  shopName: {
    type: String,
    required: [true, "Set shop name!"],
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const Drug = model("Drug", drugSchema);

module.exports = Drug;
