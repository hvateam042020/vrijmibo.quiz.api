import { RequestHandler } from "express";
import { Quiz } from "../models/quiz";

const Quizes: Quiz[] = []

export const createQuiz: RequestHandler = (req, res, next) => {
    req.body
};
