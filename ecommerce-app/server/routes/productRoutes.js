const router = require("express").Router();
const auth = require("../middleware/authMiddleware");

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
   uploadImage,
} = require("../controllers/productController");
const upload =
  require(
    "../middleware/uploadMiddleware"
  );

router.post(
  "/upload",
  auth,
  upload.single("image"),
  uploadImage
);

router.get("/", getProducts);
router.get("/:id", getProduct);

router.post("/", auth, createProduct);
router.put("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

module.exports = router;