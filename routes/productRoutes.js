const express = require("express");
const {
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();
const cors = require("cors");

// router.use(
//   cors({
//     credentials: true,
//     origin: "http://localhost:5173",
//   })
// );

router.get("/getProducts", getProduct);
router.post("/addProduct", addProduct);
router.put("/editProduct", editProduct);
router.post("/deleteProduct", deleteProduct);

module.exports = router;
