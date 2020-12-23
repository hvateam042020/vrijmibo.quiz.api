import { Router } from "express";
import { getQuizes, createQuiz } from "../controllers/quiz";

const router = Router();

router.post("/", createQuiz);

router.get("/all", getQuizes);

router.get("/:id");

export default router;
