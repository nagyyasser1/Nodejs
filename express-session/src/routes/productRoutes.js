import { Router } from "express";
const router = Router();
import { getProducts } from "../controllers/productController.js";
import { authenticateUser } from "../middlewares/auth.js";

router.get("/", authenticateUser, getProducts);

export default router;
