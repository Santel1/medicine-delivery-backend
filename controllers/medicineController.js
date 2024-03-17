const { Drug, Order } = require("../models");
const { catchAsync } = require("../utils");

exports.getAllDrugs = catchAsync(async (req, res, next) => {
  if (req.params.shopName) {
    const drugs = await Drug.find({ shop: req.params.shopName });
    res.status(200).json({
      drugs,
    });
  }

  const drugs = await Drug.find();

  res.status(200).json({
    drugs,
  });
});

exports.createDrugs = catchAsync(async (req, res, next) => {
  const newDrugs = await Drug.create(req.body);

  res.status(201).json({
    drugs: newDrugs,
  });
});

exports.createOrder = catchAsync(async (req, res, next) => {
  const newOrder = await Order.create(req.body);

  res.status(201).json({
    order: newOrder,
  });
});

exports.getAllOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find();

  res.status(200).json({
    orders,
  });
});
