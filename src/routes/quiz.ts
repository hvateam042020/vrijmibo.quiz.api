import { Router } from "express";
import { getQuizes, createQuiz, getQuiz, deleteQuiz } from "../controllers/quiz";

const router = Router();

router.post("/", createQuiz);

router.get("/all", getQuizes);

router.get("/:id",getQuiz);

router.delete("/:id", deleteQuiz);

export default router;
