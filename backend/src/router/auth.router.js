import {Router} from "express"
import { loginController, refreshController, registerUser } from "../controllers/auth.controller.js"
import { loginValidator, registerValidator } from "../validators/auth.validator.js"


const router = Router()

router.post("/register",registerValidator,registerUser);
router.post("/login",loginValidator,loginController);
router.post("/refresh",refreshController)
export default router