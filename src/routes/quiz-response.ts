import { Router } from "express";
import { getResult } from "../controllers/quiz-response";

const router = Router();

router.post("/", getResult);

export default router;
