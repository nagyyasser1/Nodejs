import { Router } from "express";
const router = Router();
import {
  getLogin,
  postLogin,
  getRegister,
  postRegister,
  logout,
} from "../controllers/authController.js";

router.get("/login", getLogin);
router.post("/login", postLogin);
router.get("/register", getRegister);
router.post("/register", postRegister);
router.get("/logout", logout);

export default router;
