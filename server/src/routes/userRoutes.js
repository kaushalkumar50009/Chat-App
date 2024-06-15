import { Router } from "express";
import {
  activeUser,
  allUsers,
  authUser,
  registerUser,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/").get(protect, allUsers);
router.route("/active").get(protect, activeUser);

export default router;
