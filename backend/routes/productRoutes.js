import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// @desc    Fetch all products
// @route   GET /api/products and POST /api/products
// @access  Public and Private/Admin
router.route("/").get(getProducts).post(protect, admin, createProduct);

// @desc    Fetch single product
// @route   GET /api/products/:id and DELETE /api/products/:id and PUT /api/products/:id
// @access  Public and Private/Admin
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

// @desc    Create a review for a product
// @route   POST /api/products/:id/reviews
// @access  Private
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
