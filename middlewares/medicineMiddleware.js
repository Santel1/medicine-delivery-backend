const { Types } = require("mongoose");

const Drug = require("../models/drugModel");
const { catchAsync, HttpError } = require("../utils");

exports.checkShopName = catchAsync(async (req, res, next) => {
  const { shopName } = req.params;

  const shopDrugs = await Drug.exists({ shop: shopName });

  if (!shopDrugs) throw new HttpError(404, "Drugs not found..");

  next();
});
