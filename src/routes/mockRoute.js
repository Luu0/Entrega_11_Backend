import {getProductsFromMock} from "../Controllers/mockfetchController.js"
import { Router } from "express"

const router = Router();

router.get("/",getProductsFromMock);

export default router
