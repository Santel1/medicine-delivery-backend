const { Router } = require("express");

const { medicineController } = require("../controllers");
const { medicineMiddleware } = require("../middlewares");

const router = Router();

router.get("/drugs", medicineController.getAllDrugs);
router.get(
  "/drugs/:shopName",
  medicineMiddleware.checkShopName,
  medicineController.getAllDrugs
);
router.post("/drugs", medicineController.createDrugs);
router.post("/cart", medicineController.createOrder);
router.get("/orders", medicineController.getAllOrders);

module.exports = router;
